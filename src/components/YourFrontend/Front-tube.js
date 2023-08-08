import React, {useState} from 'react';
import './youtube.scss'
import ReactPlayer from "react-player";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import  img from '../../img/Rectangle 2198.svg'
import Comment from '../Comment';
import MasterF from '../MasterF/MasterF';



const FrontTube = () => {
    const [video,setvideo]=useState(1)
    const [end, setEnd] = useState([])
    const [saw1, setSaw1] = useState(false)
    const [saw2, setSaw2] = useState(false)
    const [saw3, setSaw3] = useState(false)
    const [saw4, setSaw4] = useState(false)
    const [saw5, setSaw5] = useState(false)


    const [text1,setText1] = useState(true)
    const [text2,setText2] = useState(true)
    const [text3,setText3] = useState(true)

    console.log(end)
    console.log(saw1)

    return (
        <div id="frontTube">
            <div className="container">
                <div className="frontTube_front">
<td><th style={{color:"white"}}><span style={{opacity:'0.4'}}>/ Мастер классы </span> /Frontend разработчик</th></td>
                    <div className="frontTube_front--general">
                   <div className="frontTube_front--general__one">
                       <h1>Frontend-разработчик</h1>
                       <p>Когда нужно переходить от прокачивания личной<br/>
                           эффективности к изучению эффективности командой?</p>
                   </div>
                        <div className="frontTube_front--general__two">
                            <h3>Прогресс по курсу</h3>
                            <input type="range"  width={400} style={{background:'blue'}}/>
                            <div className="frontTube_front--general__two--module">
                                <div className="">
                                    <center>
                            <p>Пройдено<br/>
                               модулей<br/>
                                0/3
                            </p>
                                    </center>
                                </div>
                                <div className="">
                                    <center>
                            <p>Пройдено<br/>
                                материалов<br/>
                                0/3
                            </p>
                                    </center>
                                </div>
                            </div>
                        </div>

                    </div>





                    <h1 className={"frontTube_front++h1"} >ПРОГРАММА КУРСА </h1>
                  <div className="frontTube_front--video">


                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 1 ? "block" : "none"}} url={'https://www.youtube.com/watch?v=gehFGUGbnRs'}/>
                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 2 ? "flex" : "none"}}  url={'https://www.youtube.com/watch?v=U2OliQwRb6c'}/>
                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 3 ? "block" : "none"}} url={'https://www.youtube.com/watch?v=KyFWqbRfWIA&list=PLQOaTSbfxUtD6kMmAYc8Fooqya3pjLs1N'}/>
                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 4 ? "block" : "none"}} url={'https://www.youtube.com/watch?v=GQJrzIJEsJ0'}/>
                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 5 ? "block" : "none"}} url={'https://www.youtube.com/watch?v=fJ2AxT3qHPE'}/>
                          <ReactPlayer className = "frontTube_front--video_-player" controls={true}  style={{display: video === 6 ? "block" : "none"}} url={'https://www.youtube.com/watch?v=BxJI0RdLeTE'}/>

                  <div className="" >

                  <div className="frontTube_front--video__action">
                      <div className="frontTube_front--video__action--open"
                      onClick={()=>{
                          setText1(!text1)
                          setText2(false)
                          setText3(false)

                      }}>
                          <button>Модуль 1</button>
                          <div className="frontTube_front--video__action--open__text">
                              <h3>Reactivity</h3>
                              <p>Пройдено материалов: 4/15</p>
                          </div>
                          {
                              text2 ? <span>
                                  <SlArrowUp/>
                              </span>:
                                  <span><SlArrowDown/></span>

                          }


                  </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                           setEnd([1])
                          setvideo(1)
                          end.map(el => el === 1)
                              setSaw1(true)
                              setSaw2(false)
                              setSaw3(false)
                              setSaw5(false)
                              setSaw4(false)
                      }} style={{height: text1 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw1 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50}  src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text" >
                                  <h2>3  Observable exampler</h2>
                                  <h5>1Урок</h5>
                              </div>





                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([2])
                          setvideo(2)
                          end.map(el => el === 2)
                          setSaw2(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text1 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw2 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text">
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>






                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([3])
                          setvideo(3)
                          end.map(el => el === 3)
                          setSaw3(true)
                          setSaw1(false)
                          setSaw2(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text1 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw3 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text">
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>



                      <div className="frontTube_front--video__action--block" onClick={()=>{
                               setEnd([4])
                               setvideo(4)
                               end.map(el => el === 4)
                               setSaw4(true)
                               setSaw1(false)
                               setSaw3(false)
                               setSaw5(false)
                           }} style={{height: text1 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw4 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text">
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([5])
                          setvideo(6)
                          end.map(el => el === 5)
                          setSaw5(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw4(false)
                      }} style={{height: text1 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw5 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text">
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      </div>
                  <div className="frontTube_front--video__action">
                      <div className="frontTube_front--video__action--open"
                      onClick={()=>{
                          setText2(!text2)
                          setText1(false)
                          setText3(false)

                      }}>
                          <button>Модуль 1</button>
                          <div className="frontTube_front--video__action--open__text">
                              <h3>Reactivity</h3>
                              <p>Пройдено материалов: 4/15</p>
                          </div>
                          {
                              text2 ? <span>
                                  <SlArrowUp/>
                              </span>:
                                  <span><SlArrowDown/></span>

                          }


                  </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                           setEnd([1])
                          setvideo(1)
                          end.map(el => el === 1)
                              setSaw1(true)
                              setSaw2(false)
                              setSaw3(false)
                              setSaw5(false)
                              setSaw4(false)
                      }} style={{height: text2 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw1 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50}  src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text">
                                  <h2>3  Observable exampler</h2>
                                  <h5>1Урок</h5>
                              </div>





                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([2])
                          setvideo(2)
                          end.map(el => el === 2)
                          setSaw2(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text2 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw2 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text">
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>






                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([3])
                          setvideo(3)
                          end.map(el => el === 3)
                          setSaw3(true)
                          setSaw1(false)
                          setSaw2(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text2 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw3 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text">
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>



                      <div className="frontTube_front--video__action--block" onClick={()=>{
                               setEnd([4])
                               setvideo(4)
                               end.map(el => el === 4)
                               setSaw4(true)
                               setSaw1(false)
                               setSaw3(false)
                               setSaw5(false)
                           }} style={{height: text2 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw4 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text">
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([5])
                          setvideo(6)
                          end.map(el => el === 5)
                          setSaw5(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw4(false)
                      }} style={{height: text2 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw5 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text">
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      </div>
                  <div className="frontTube_front--video__action">
                      <div className="frontTube_front--video__action--open"
                      onClick={()=>{
                          setText3(!text3)
                          setText1(false)
                          setText2(false)

                      }}>
                          <button>Модуль 1</button>
                          <div className="frontTube_front--video__action--open__text">
                              <h3>Reactivity</h3>
                              <p>Пройдено материалов: 4/15</p>
                          </div>
                          {
                              text3 ? <span>
                                  <SlArrowUp/>
                              </span>:
                                  <span><SlArrowDown/></span>

                          }


                  </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                           setEnd([1])
                          setvideo(1)
                          end.map(el => el === 1)
                              setSaw1(true)
                              setSaw2(false)
                              setSaw3(false)
                              setSaw5(false)
                              setSaw4(false)
                      }} style={{height: text3 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw1 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50}  src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text" >
                                  <h2>3  Observable exampler</h2>
                                  <h5>1Урок</h5>
                              </div>





                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([2])
                          setvideo(2)
                          end.map(el => el === 2)
                          setSaw2(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text3 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw2 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text" >
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>






                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([3])
                          setvideo(3)
                          end.map(el => el === 3)
                          setSaw3(true)
                          setSaw1(false)
                          setSaw2(false)
                          setSaw5(false)
                          setSaw4(false)
                      }} style={{height: text3 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw3 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>

                          <img width={80} height={50} src={img} alt="no"/>
                              <div className="frontTube_front--video__action--block__-text" >
                                  <h2>3  Observable exampler</h2>
                                  <h5>Урок</h5>
                              </div>

                      </div>



                      <div className="frontTube_front--video__action--block" onClick={()=>{
                               setEnd([4])
                               setvideo(4)
                               end.map(el => el === 4)
                               setSaw4(true)
                               setSaw1(false)
                               setSaw3(false)
                               setSaw5(false)
                           }} style={{height: text3 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw4 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text" >
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      <div className="frontTube_front--video__action--block" onClick={()=>{
                          setEnd([5])
                          setvideo(6)
                          end.map(el => el === 5)
                          setSaw5(true)
                          setSaw1(false)
                          setSaw3(false)
                          setSaw4(false)
                      }} style={{height: text3 ? '70px': '0',
                          overflow:'hidden'}}>

                          <div className="" style={{background: saw5 ? "green" : " ",width:'10px',height:'10px' ,borderRadius:'50%',position:'absolute',bottom:'25px',left:'15px'}} ></div>
                          <img width={80} height={50} src={img} alt="no"/>
                          <div className="frontTube_front--video__action--block__-text">
                              <h2>3  Observable exampler</h2>
                              <h5>Урок</h5>
                          </div>



                      </div>
                      </div>

                  </div>
                  </div>





                </div>

            </div>

            <Comment/>
            <MasterF/>
        </div>
    );
};

export default FrontTube;