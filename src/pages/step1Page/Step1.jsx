import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { shuffle, random } from "lodash";
import { ref, child, set } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import noImg from "../../assets/images/noImg.svg";



import mix1 from "../../assets/images/디저트.jpeg";
import mix2 from "../../assets/images/img3.jpeg";
import noToast from "../../assets/images/noToast.png";
import yesToast from "../../assets/images/yesToast.png";
import yesImg from "../../assets/images/yesImg.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { imgRef, storage, db } from "../../api/firebaseConfig";
import {  getDownloadURL,listAll } from "firebase/storage";


export default function Step1({ type }) {
    const arr = [["Piano","Dessert", "Sea", "Bicycle", "Television"],["Chair","Cloud","Book","Shoe", "Meal"] ];
    const [level, setLevel] = useState(0);

    const dispatch = useDispatch();
    
    let wordgood = useSelector((state) => state.word.value);
    const wordReal = useSelector((state) => state.step1.value);
    const [wordlist,setWordlist] = useState(['ostrich', 'pancake', 'seafood', 'spaghetti','blueberry']);

    const [step2Word,setStep2Word] = useState({});
    const [checked, setChecked] = useState();

    const [imgArr, setImgArr] = useState(mix1);
    const navigate = useNavigate();
    
    let [toastState, setToastState] = useState(false);

    const [image, setImage] = useState("");
    // const imageRef = ref(storage, `image/HACK-EDUTECH-0607/chapter3_dessert1.jpg`);
    
    getDownloadURL(imgRef)
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
  
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
  
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
    });

    useEffect(() => {
        if(level==9){
            set(ref(db, '/USER_TABLE/HACK-EDUTECH-0607/CHAPTER3/STEP2/words/'), {
                ...step2Word
            });
    
        }
    
    
    }, [level,step2Word])
    
    useEffect(() => {
        
        let timer = setTimeout(() => {
            setToastState(false); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [toastState]);



    const handleChecked = (e) => {

        const nodes = [...e.target.parentElement.children];
        arr.pop()
        const checkWordlist=[...wordlist];
const checkWord=wordReal[level];
        const index = nodes.indexOf(e.target);
        setChecked(index);
        setChecked();

        setLevel(level+1);
        setWordlist(shuffle(wordReal.filter((el, idx) => el !== wordReal[level]).slice(0, 5) , wordReal[level]));
        console.log(checkWord==checkWordlist[index]);
        if (checkWord==checkWordlist[index]){

            setToastState("answer"); 

        }else{
            setToastState("false");
            const keysOfPerson = Object.values(wordgood);

            const arr =[...keysOfPerson][0]
            console.log(arr);
            const k = { [wordReal[level]] : arr[wordReal[level]]}
            // const key = arr.find((key) => key === wordReal[level]);
            // const key = arr.map((key,idx) => console.log(key,idx));
            // setStep2Word({...step2Word,...wordgood.value.wordReal[level]})
            setStep2Word({...step2Word,...k})

            console.log(arr[wordReal[level]])
        }

    };


    const handleLevel = (e) => {
        setLevel(level+1);
        setImgArr(mix2);
    }

    return (
        <div style={{ backgroundColor: "#F7F7F8" , position:" relative"}}>
            <Header type={type} />
            <State>
                {level+1}/{wordReal.length}
            </State>
            <p style={{ marginBottom: "10px"}}>연관된 단어를 하나 고르세요</p>
            <img id="myimg" alt="" style={{width: "212px",height: "212px", borderRadius: "20px"}} />


            <Div>
                {wordlist.map((a, idx) => (
                    <Btn idx={idx} checked={checked} onClick={handleChecked}>{a}</Btn>
                ))}
                
            </Div>
            <Div2>
                <button  onClick={() => { navigate("/step2"); }}>예시문</button>
                <button>시뮬레이션 해보기</button>
            </Div2>
            <RightBtn src={arrowRight}  onClick={handleLevel}></RightBtn>
            <LeftBtn src={arrowLeft}  onClick={handleLevel}></LeftBtn>
            {toastState==="answer" && <ContToastAnswer >
                                            <img src={yesImg} alt="" />
                                            <p>OK!</p>
                                        </ContToastAnswer>}
                {toastState==="false" &&  <ContToastFalse >
                            <img src={noImg} alt="" />
                            <p> 정답 : Healthy <br />
                                SAVED!</p>
                        </ContToastFalse>}
            
        </div>
    );
}

export const Wrap = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H2 = styled.h2`
    margin: 40px 0 7px;
    font-size: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Word = styled.div`
    margin: 30px;
    font-size: 20px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const State = styled.div`
    display: flex;
    margin: 38px;
    justify-content: center;
`;

export const Rate = styled.div`
    /* margin-top: 6px; */
    width: 12px;
    height: 12px;
    background-color: ${(props) =>
        props.range > props.level ? "white" : "#777B8A"};
    /* background-color:#EF6363; */
    margin-left: 10px;
    border-radius: 50%;
`;

export const Btn = styled.button`
    display: flex;
    width: 80px;
    border-radius: 20px;
    border: none;
    background: #fff;
    height: 48px;
    padding: 15px 0;
    font-size: 16px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 10px;
    background-color: ${(props) =>
         props.idx===props.checked ? "#FF5656" : "#FFF"};
    color: ${(props) =>
         props.idx===props.checked ? "#FFF" : "#cf1818"};

&:hover {
        animation: scale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes scale{
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }

    } 
`;

const Div = styled.div`
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Div2 = styled.div`
    ${"button"} {
        border-radius: 40px;
        border: 1px solid #777b8a;
        background: #fff;
        padding: 12px 15px;
        margin-right: 20px;
    }
`;



export const focusIn =  keyframes`
        0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
                
        }
        22% {
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        80% {
        -webkit-transform: scale(1);
                transform: scale(1);
                opacity:100%;
        
            }

        100% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
                opacity:0%;
        }
`


export const focusOut =  keyframes`
        0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
                
        }
        22% {
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        70% {
        -webkit-transform: scale(1);
                transform: scale(1);
                opacity:100%;
        
            }

        100% {
        -webkit-transform: scale(0);
                transform: scale(0);
                opacity:0;
        }
`



export const ContToastAnswer = styled.div`
 width: 203px;
    height: 203px;
    background-color: green;
    border-radius: 20px;
    position: absolute;
    top: 152px;
    right: 78px;

    text-align: center; 
    animation: ${focusIn} 2s forwards ;

    ${"img"}{
        margin: 70px 0 20px;
    }

    ${"p"}{
        color: #fff;
text-align: center;
font-size: 16px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
`



export const ContToastFalse = styled.div`
    width: 203px;
    height: 203px;
    background-color: #FF7878;
    border-radius: 20px;
    position: absolute;
    top: 152px;
    right: 78px;

    text-align: center; 
    animation: ${focusIn} 2s forwards ;

    ${"img"}{
        margin: 70px 0 20px;
    }

    ${"p"}{
        color: #fff;
text-align: center;
font-size: 16px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
`


export const RightBtn = styled.img`
    position: absolute;
    top: 250px;
    right:20px;
    cursor: pointer;
`;

export const LeftBtn = styled.img`
    position: absolute;
    top: 250px;
    left:20px;
    cursor: pointer;

`;