import React from "react";
import './index.scss';



const YoutubeH = () => {
  return (
    <div id="hero11">
      <div className="container">
        <div className="hero11">
          <div className="hero11--hero11-text">
            <h1>
              {" "}
              Как работает многопоточность в Java? Старая добрая <br />{" "}
              многопоточность в Java — это базовые примитивы <br />{" "}
              многопоточности:
            </h1>
            <li>Threads (потоки);</li>
            <li>Synchronization (синхронизация);</li>
            <li>Wait/notify (ожидание/уведомление).</li>
          </div>
          <div className="hero11--hero11-hext1">
          </div>
        </div>
            <h1>
              Сложно писать, сложно отлаживать, сложно <br /> тестировать.
            </h1>
            <li>Java 5 Future interface:</li>
            <li>V get()</li>
            <li>boolean cancel() V get()</li>
            <li>boolean isCancelled()</li>
            <li>boolean isDone()</li>
            <li>Executors</li>
            <li>Callable interface</li>
            <li>BlockingQueue</li>
      </div>
    </div>
  );
};

export default YoutubeH;
