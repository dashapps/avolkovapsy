desk

<div class="desk">
    <div class="hero-d">
        <div class="hero2">
            <img class="rectangle-3" src="rectangle-30.png" /><img class="rectangle-2" src="rectangle-20.png" />
        </div>
        <div class="rectangle-23">
        </div>
        <div class="rectangle-232">
        </div>
        <div class="frame-19">
            <div class="frame-17">
                <div class="h-2"> Перезагрузка </div>
                <div class="h-22"> без паузы от жизни </div>
            </div>
            <div class="frame-16">
                <div class="frame-4">
                    <div class="h-23"> Индивидуально </div>
                </div>
                <div class="frame-3">
                    <div class="h-24"> В группе </div>
                </div>
            </div>
        </div>
        <div class="frame-18">
            <div class="h-25"> Для тех, кто живёт<br />в напряжении, высокой ответственности<br />и постоянном потоке задач </div>
            <div class="h-26"> и чувствует, что обычный отдых больше<br />не восстанавливает. </div>
        </div>
    </div>
    <div class="peregruz-d">
        <img class="rectangle-21" src="rectangle-210.png" />
        <div class="rectangle-233">
        </div>
        <div class="h-27"> Ты справляешься </div>
        <div class="h-28"> но какой ценой? </div><svg class="group-1" width="910" height="1" viewBox="0 0 910 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="910" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-29"> Можно работать через разговор, через тело или соединять оба подхода — в зависимости от запроса и состояния. </div>
        <div class="frame-42">
            <div class="h-210"> Голова постоянно занята задачами. </div>
        </div>
        <div class="frame-5">
            <div class="h-210"> Отдых не даёт ощущения восстановления. </div>
        </div>
        <div class="frame-6">
            <div class="h-210"> На простые решения уходит больше сил, чем раньше. </div>
        </div>
        <div class="frame-7">
            <div class="h-210"> Появляется раздражение, усталость или внутренний шум. </div>
        </div>
        <div class="frame-8">
            <div class="h-210"> Ошибки возникают там, где раньше всё было очевидно. </div>
        </div>
        <div class="frame-9">
            <div class="h-210"> Кажется, что энергии хватает только на обязательное. </div>
        </div>
    </div>
    <div class="peregrus">
        <img class="rectangle-4" src="rectangle-40.png" />
        <div class="rectangle-234">
        </div>
        <div class="h-211"> Это не вопрос </div>
        <div class="h-212"> силы воли </div><svg class="group-12" width="910" height="1" viewBox="0 0 910 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="910" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-213"> Иногда система настолько привыкает жить <br />в напряжении, что начинает считать его нормой. </div>
        <div class="h-214"> Ты уже платишь за перегруз. <br />Возможно, просто ещё не считаешь эту цену. </div>
    </div>
    <div class="yourproblems">
        <img class="rectangle-5" src="rectangle-50.png" />
        <div class="rectangle-235">
        </div>
        <div class="h-215"> Что происходит </div>
        <div class="h-216"> на самом деле </div><svg class="group-13" width="1043" height="1" viewBox="0 0 1043 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="1043" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-217"> Проблема не всегда в количестве задач </div>
        <div class="h-218"> Когда напряжение становится постоянным фоном, всё больше ресурсов уходит на то, чтобы просто держаться в рабочем состоянии. </div>
        <div class="h-219"> На ясность, внимание, восстановление, отношения <br />и новые решения остаётся меньше энергии. </div>
    </div>
    <div class="prod-2">
        <img class="rectangle-6" src="rectangle-60.png" />
        <div class="rectangle-24">
        </div>
        <div class="h-220"> Чтобы вернуть состояние, <br />в котором продуктивность снова становится возможной, </div>
        <div class="h-221"> важно работать <br />не только через разговор. </div>
    </div>
    <div class="psycho">
        <img class="rectangle-8" src="rectangle-80.png" />
        <div class="rectangle-242">
        </div>
        <div class="h-222"> Верни себе ясность, ресурс <br />и внутреннюю устойчивость — </div>
        <div class="h-223"> работая не только <br />с психикой, <br />но и с телесным напряжением </div>
    </div>
</div>
css

.desk,
.desk * {
    box-sizing: border-box;
}

.desk {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
}

.hero-d {
    align-self: stretch;
    flex-shrink: 0;
    height: 670px;
    position: relative;
    overflow: hidden;
}

.hero {
    position: absolute;
    inset: 0;
}

.hero2 {
    background: var(--bg1, #dbd9d2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    height: 670px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.rectangle-3 {
    flex-shrink: 0;
    width: 660px;
    height: 736px;
    position: relative;
    object-fit: cover;
    aspect-ratio: 660/736;
}

.rectangle-2 {
    flex-shrink: 0;
    width: 528px;
    height: 710px;
    position: relative;
    object-fit: cover;
    aspect-ratio: 528/710;
}

.rectangle-23 {
    background: rgba(255, 245, 233, 0.30);
    border-radius: 0px 0px 24px 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 0px 1px 1px 1px;
    width: 604px;
    height: 248.71px;
    position: absolute;
    left: calc(50% - 300px);
    top: 0px;
}

.rectangle-232 {
    background: rgba(224, 218, 197, 0.60);
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 410px;
    height: 190.29px;
    position: absolute;
    left: calc(50% - 245px);
    top: 387.66px;
}

.frame-19 {
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: center;
    justify-content: flex-start;
    width: 811px;
    height: 282.55px;
    position: absolute;
    left: 50%;
    translate: -50%;
    top: 273px;
}

.frame-17 {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    position: relative;
}

.h-2 {
    color: var(--liteyell, #fde5ba);
    text-align: right;
    font-family: 'Onest-Black', sans-serif;
    font-size: 100px;
    line-height: 130%;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;
    align-self: stretch;
    -webkit-text-stroke: 1px var(--dark-baige, #a69684);
}

.h-22 {
    color: var(--just-dark, #5c5958);
    text-align: center;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 40px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
    align-self: stretch;
}

.frame-16 {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    width: 637px;
    height: 94px;
    position: relative;
}

.frame-4 {
    background: var(--primary, #fab842);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
}

.h-23 {
    color: var(--just-dark, #5c5958);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 32px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.frame-3 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
}

.h-24 {
    color: var(--primary, #fab842);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 32px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.frame-18 {
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 467px;
    height: 139.4px;
    position: absolute;
    left: 407px;
    top: 77px;
}

.h-25 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
    align-self: stretch;
    height: 67px;
}

.h-26 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
    width: 439px;
    height: 54px;
}

.peregruz-d {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 751px;
    position: relative;
}

.rectangle-21 {
    opacity: 0.8;
    width: 563px;
    height: 641px;
    position: absolute;
    left: 358px;
    top: 100px;
    object-fit: cover;
}

.rectangle-233 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 945px;
    height: 512px;
    position: absolute;
    left: 137px;
    top: 177px;
}

.group-2 {
    position: absolute;
    inset: 0;
}

.h-27 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 90px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 233px;
    top: 36px;
}

.h-28 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 233px;
    top: 120px;
}

.group-1 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: 140px;
    top: 111px;
    overflow: visible;
}

.h-29 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 16px;
    line-height: 110%;
    font-weight: 900;
    position: absolute;
    left: 833px;
    top: 207px;
    width: 214px;
    height: 123px;
}

.frame-42 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 79.03px;
    top: 196.19px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(10deg) scale(1, 1);
}

.h-210 {
    color: var(--beigebg, #e5d7c7);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 18px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
}

.frame-5 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 75.29px;
    top: 289.06px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(6deg) scale(1, 1);
}

.frame-6 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 681px;
    top: 411.6px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-10deg) scale(1, 1);
}

.frame-7 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 629px;
    top: 519.3px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.frame-8 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 70px;
    top: 470.15px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.frame-9 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 36px 18px 36px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 677px;
    top: 598px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(5deg) scale(1, 1);
}

.peregrus {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 741px;
    position: relative;
}

.rectangle-4 {
    width: 1358px;
    height: 741px;
    position: absolute;
    left: -39px;
    top: 0px;
    object-fit: cover;
}

.rectangle-234 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 894px;
    height: 410px;
    position: absolute;
    left: 202px;
    top: 38px;
}

.h-211 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 90px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 187px;
    top: 305px;
}

.h-212 {
    color: var(--negative, #f25d34);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 202px;
    top: 391px;
}

.group-12 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: 96px;
    top: 380px;
    overflow: visible;
}

.h-213 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 36px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 251px;
    top: 69px;
    width: 496px;
    height: 163px;
}

.h-214 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 252px;
    top: 498px;
    width: 532px;
    height: 79px;
}

.yourproblems {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 752px;
    position: relative;
    overflow: hidden;
}

.rectangle-5 {
    background: linear-gradient(90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 82.71278142929077%), linear-gradient(-90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 100%);
    width: 1434px;
    height: 804px;
    position: absolute;
    left: calc(50% - 857px);
    top: 18px;
    object-fit: cover;
    aspect-ratio: 1434/804;
}

.rectangle-235 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 728px;
    height: 542px;
    position: absolute;
    left: 405px;
    top: 76px;
}

.h-215 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 90px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 179px;
    top: 341px;
}

.h-216 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 179px;
    top: 420px;
}

.group-13 {
    width: 1043px;
    height: 0px;
    position: absolute;
    left: 90px;
    top: 416px;
    overflow: visible;
}

.h-217 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Bold', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 700;
    position: absolute;
    left: 758px;
    top: 106px;
    width: 253px;
}

.h-218 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 22px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 758px;
    top: 188px;
    width: 330px;
}

.h-219 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 22px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 758px;
    top: 498px;
    width: 330px;
}

.prod-2 {
    background: #cfcdc6;
    align-self: stretch;
    flex-shrink: 0;
    height: 650.17px;
    position: relative;
}

.rectangle-6 {
    background: linear-gradient(270deg, rgba(207, 205, 198, 1.00) 0%, rgba(212, 209, 200, 0.00) 100%), linear-gradient(-89.89deg, rgba(229, 215, 199, 1.00) 0%, rgba(207, 205, 198, 1.00) 100%), linear-gradient(to left, #f4e3d6, #f4e3d6);
    width: 1093px;
    height: 666px;
    position: absolute;
    right: 48px;
    top: 0px;
    object-fit: cover;
    aspect-ratio: 1093/666;
}

.rectangle-24 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 837px;
    height: 467px;
    position: absolute;
    left: 1024px;
    top: 62px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-220 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 252px;
    top: 145px;
    width: 184px;
}

.h-221 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 782px;
    top: 380px;
    width: 184px;
}

.psycho {
    align-self: stretch;
    flex-shrink: 0;
    height: 672px;
    position: relative;
    overflow: hidden;
}

.rectangle-8 {
    background: radial-gradient(closest-side, rgba(212, 207, 198, 1.00) 0%, rgba(253, 234, 219, 0.00) 100%), linear-gradient(to left, #dbd9d2, #dbd9d2);
    width: 1280px;
    height: 671px;
    position: absolute;
    left: 0px;
    top: 0.83px;
    object-fit: cover;
    aspect-ratio: 1280/671;
}

.rectangle-242 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 768px;
    height: 431px;
    position: absolute;
    left: 933px;
    top: 60.83px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-222 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 254px;
    top: 111.83px;
    width: 232px;
    height: 75px;
}

.h-223 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 254px;
    top: 226.83px;
    width: 334px;
}

tablet

<div class="tab">
    <div class="hero-t">
        <img class="rectangle-3" src="rectangle-30.png" /><img class="rectangle-2" src="rectangle-20.png" />
        <div class="rectangle-23">
        </div>
        <div class="h-2"> Для тех, кто живёт<br />в напряжении, высокой ответственности<br />и постоянном потоке задач </div>
        <div class="h-22"> и чувствует, что обычный отдых больше<br />не восстанавливает. </div>
        <div class="rectangle-24">
        </div>
        <div class="frame-16">
            <div class="frame-4">
                <div class="h-23"> Индивидуально </div>
            </div>
            <div class="frame-3">
                <div class="h-24"> В группе </div>
            </div>
        </div>
        <div class="frame-17">
            <div class="h-25"> Перезагрузка </div>
            <div class="h-26"> без паузы от жизни </div>
        </div>
    </div>
    <div class="peregrus">
        <img class="rectangle-21" src="rectangle-210.png" />
        <div class="rectangle-232">
        </div>
        <div class="h-27">
            <span><span class="h-27-span"> Ты справляешься </span><span class="h-27-span2">
                    <br />
                </span></span>
        </div><svg class="group-1" width="800" height="1" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="910" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-28"> но какой ценой? </div><svg class="group-12" width="800" height="1" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="910" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-29"> Можно работать через разговор, через тело или соединять оба подхода — в зависимости <br />от запроса и состояния. </div>
        <div class="frame-42">
            <div class="h-210"> Голова постоянно занята задачами. </div>
        </div>
        <div class="frame-5">
            <div class="h-210"> Отдых не даёт ощущения восстановления. </div>
        </div>
        <div class="frame-8">
            <div class="h-210"> Ошибки возникают там, где раньше всё было очевидно. </div>
        </div>
        <div class="frame-6">
            <div class="h-210"> На простые решения уходит больше сил, чем раньше. </div>
        </div>
        <div class="frame-9">
            <div class="h-210"> Кажется, что энергии хватает только на обязательное. </div>
        </div>
        <div class="frame-7">
            <div class="h-210"> Появляется раздражение, усталость или внутренний шум. </div>
        </div>
    </div>
    <div class="peregrus2">
        <img class="rectangle-4" src="rectangle-40.png" />
        <div class="rectangle-233">
        </div>
        <div class="h-211"> Это не вопрос </div><svg class="group-13" width="800" height="1" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="910" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-212"> силы воли </div>
        <div class="h-213"> Иногда система настолько привыкает жить в напряжении, что начинает считать его нормой. </div>
        <div class="h-214"> Ты уже платишь за перегруз. Возможно, просто ещё не считаешь эту цену. </div>
    </div>
    <div class="yourproblems">
        <img class="rectangle-5" src="rectangle-50.png" />
        <div class="rectangle-234">
        </div>
        <div class="h-215"> Проблема не всегда в количестве задач </div>
        <div class="h-216"> Когда напряжение становится постоянным фоном, всё больше ресурсов уходит на то, чтобы просто держаться в рабочем состоянии. </div>
        <div class="h-217"> На ясность, внимание, восстановление, отношения <br />и новые решения остаётся меньше энергии. </div>
        <div class="h-218"> Что происходит </div>
        <div class="h-219"> на самом деле </div><svg class="group-14" width="800" height="1" viewBox="0 0 800 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="-56" y1="0.5" x2="987" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
    </div>
    <div class="prod">
        <img class="rectangle-6" src="rectangle-60.png" />
        <div class="rectangle-242">
        </div>
        <div class="h-220"> важно работать <br />не только через разговор. </div>
        <div class="h-221"> Чтобы вернуть состояние, <br />в котором продуктивность снова становится возможной, </div>
    </div>
    <div class="psycho">
        <img class="rectangle-8" src="rectangle-80.png" />
        <div class="rectangle-243">
        </div>
        <div class="h-222"> Верни себе <br />ясность, ресурс <br />и внутреннюю устойчивость </div>
        <div class="h-223"> работая <br />не только <br />с психикой, <br />но и с телесным напряжением </div>
    </div>
</div>

css

.tab,
.tab * {
    box-sizing: border-box;
}

.tab {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
}

.hero-t {
    background: var(--bg1, #dbd9d2);
    align-self: stretch;
    flex-shrink: 0;
    height: 670px;
    position: relative;
    overflow: hidden;
}

.rectangle-3 {
    width: 451px;
    height: 552px;
    position: absolute;
    left: -18px;
    top: -42px;
    object-fit: cover;
    aspect-ratio: 451/552;
}

.rectangle-2 {
    width: 508px;
    height: 696px;
    position: absolute;
    left: 361px;
    top: 55px;
    object-fit: cover;
    aspect-ratio: 508/696;
}

.rectangle-23 {
    background: rgba(248, 248, 248, 0.50);
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 308px;
    height: 402px;
    position: absolute;
    left: 267px;
    top: -35px;
}

.h-2 {
    color: var(--just-content, #302c2b);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: absolute;
    left: 303px;
    top: 104px;
    width: 231px;
}

.h-22 {
    color: var(--just-content, #302c2b);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: absolute;
    left: 386px;
    top: 218px;
    width: 170px;
}

.rectangle-24 {
    background: rgba(255, 255, 255, 0.41);
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 524px;
    height: 156px;
    position: absolute;
    left: -37px;
    top: 409px;
}

.frame-16 {
    display: flex;
    flex-direction: row;
    gap: 13px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: calc(50% - 311px);
    top: 520px;
}

.frame-4 {
    background: var(--primary, #fab842);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.h-23 {
    color: var(--just-dark, #5c5958);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.frame-3 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.h-24 {
    color: var(--primary, #fab842);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.frame-17 {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
    justify-content: flex-start;
    width: 811px;
    position: absolute;
    left: 0px;
    top: 312px;
}

.h-25 {
    color: var(--liteyell, #fde5ba);
    text-align: right;
    font-family: 'Onest-Black', sans-serif;
    font-size: 100px;
    line-height: 130%;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;
    align-self: stretch;
    -webkit-text-stroke: 1px var(--dark-baige, #a69684);
}

.h-26 {
    color: var(--just-dark, #5c5958);
    text-align: center;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 40px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
    align-self: stretch;
}

.peregrus {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 715px;
    position: relative;
    overflow: hidden;
}

.rectangle-21 {
    opacity: 0.8;
    width: 563px;
    height: 641px;
    position: absolute;
    left: 434px;
    top: 65px;
    object-fit: cover;
}

.rectangle-232 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 872px;
    height: 396px;
    position: absolute;
    left: 65px;
    top: 177px;
}

.group-2 {
    position: absolute;
    inset: 0;
}

.h-27 {
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 90px;
    top: 29px;
}

.h-27-span {
    color: var(--just-dark, #5c5958);
}

.h-27-span2 {
    color: var(--dark-baige, #a69684);
}

.group-1 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: 0px;
    top: 86px;
    overflow: visible;
}

.group-3 {
    position: absolute;
    inset: 0;
}

.h-28 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 42px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 176px;
    top: 117px;
}

.group-12 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: 0px;
    top: 152px;
    overflow: visible;
}

.h-29 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 16px;
    line-height: 110%;
    font-weight: 900;
    position: absolute;
    left: 142px;
    top: 605px;
    width: 292px;
    height: 56px;
}

.frame-42 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 46.81px;
    top: 140px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(10deg) scale(1, 1);
}

.h-210 {
    color: var(--beigebg, #e5d7c7);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
}

.frame-5 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 35.7px;
    top: 219px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(6deg) scale(1, 1);
}

.frame-8 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 28px;
    top: 328.32px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.frame-6 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 312px;
    top: 392px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-2deg) scale(1, 1);
}

.frame-9 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 283.92px;
    top: 532px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(5deg) scale(1, 1);
}

.frame-7 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 88px;
    top: 466.37px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.peregrus2 {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 741px;
    position: relative;
    overflow: hidden;
}

.rectangle-4 {
    width: 1358px;
    height: 741px;
    position: absolute;
    left: -39px;
    top: 0px;
    object-fit: cover;
}

.rectangle-233 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 987px;
    height: 410px;
    position: absolute;
    left: 109px;
    top: 38px;
}

.h-211 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 90px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 91px;
    top: 305px;
}

.group-13 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: 0px;
    top: 380px;
    overflow: visible;
}

.h-212 {
    color: var(--negative, #f25d34);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 138px;
    top: 391px;
}

.h-213 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 28px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 138px;
    top: 63px;
    width: 242px;
    height: 205px;
}

.h-214 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 138px;
    top: 499px;
    width: 293px;
    height: 106px;
}

.yourproblems {
    background: var(--bg2color, #d4d1c8);
    flex-shrink: 0;
    width: 800px;
    height: 839px;
    position: relative;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
    overflow: hidden;
}

.rectangle-5 {
    background: linear-gradient(90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 82.71278142929077%), linear-gradient(-90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 100%);
    width: 1434px;
    height: 804px;
    position: absolute;
    left: calc(50% - 897px);
    top: 18px;
    object-fit: cover;
    aspect-ratio: 1434/804;
}

.rectangle-234 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 728px;
    height: 546px;
    position: absolute;
    left: 115px;
    top: 72px;
}

.h-215 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Bold', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 700;
    position: absolute;
    left: 418px;
    top: 106px;
    width: 253px;
}

.h-216 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 22px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 418px;
    top: 188px;
    width: 330px;
}

.h-217 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 22px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 418px;
    top: 498px;
    width: 330px;
}

.h-218 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 90px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 33px;
    top: 310px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
}

.h-219 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 33px;
    top: 389px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(1, 1);
}

.group-14 {
    width: 1043px;
    height: 0px;
    position: absolute;
    left: -56px;
    top: 385px;
    overflow: visible;
}

.prod {
    background: #cfcdc6;
    flex-shrink: 0;
    width: 800px;
    height: 579px;
    position: relative;
    overflow: hidden;
}

.rectangle-6 {
    background: linear-gradient(270deg, rgba(207, 205, 198, 1.00) 0%, rgba(212, 209, 200, 0.00) 100%), linear-gradient(-89.89deg, rgba(229, 215, 199, 1.00) 0%, rgba(207, 205, 198, 1.00) 100%), linear-gradient(to left, #f4e3d6, #f4e3d6);
    width: 950px;
    height: 579px;
    position: absolute;
    right: -8px;
    top: 0px;
    object-fit: cover;
    aspect-ratio: 950/579;
}

.rectangle-242 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 586px;
    height: 316px;
    position: absolute;
    left: 567px;
    top: 62px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-220 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 426px;
    top: 425px;
    width: 184px;
}

.h-221 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 70px;
    top: 399px;
    width: 228px;
    height: 170px;
}

.psycho {
    flex-shrink: 0;
    width: 800px;
    height: 727px;
    position: relative;
    overflow: hidden;
}

.rectangle-8 {
    background: radial-gradient(closest-side, rgba(212, 207, 198, 1.00) 0%, rgba(253, 234, 219, 0.00) 100%), linear-gradient(to left, #dbd9d2, #dbd9d2);
    width: 1388px;
    height: 727px;
    position: absolute;
    left: -316px;
    top: 0px;
    object-fit: cover;
    aspect-ratio: 1388/727;
}

.rectangle-243 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 751px;
    height: 621px;
    position: absolute;
    left: 710px;
    top: 38px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-222 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 79px;
    top: 257px;
    width: 305px;
    height: 107px;
}

.h-223 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 491px;
    top: 433px;
    width: 199px;
    height: 133px;
}

<div class="mob">
    <div class="hero-m">
        <img class="rectangle-3" src="rectangle-30.png" /><img class="rectangle-2" src="rectangle-20.png" />
        <div class="rectangle-23">
        </div>
        <div class="h-2"> без паузы от жизни </div>
        <div class="h-22"> Перезагрузка </div>
        <div class="h-23"> Для тех, кто живёт<br />в напряжении, высокой ответственности<br />и постоянном потоке задач </div>
        <div class="h-24"> и чувствует, что обычный отдых больше<br />не восстанавливает. </div>
        <div class="rectangle-24">
        </div>
        <div class="frame-16">
            <div class="frame-4">
                <div class="h-25"> Индивидуально </div>
            </div>
            <div class="frame-3">
                <div class="h-26"> В группе </div>
            </div>
        </div>
    </div>
    <div class="peregrus">
        <img class="rectangle-21" src="rectangle-210.png" />
        <div class="rectangle-232">
        </div>
        <div class="h-27">
            <span><span class="h-27-span"> Ты справляешься </span><span class="h-27-span2">
                </span></span>
        </div>
        <div class="h-28">
            <span><span class="h-28-span">
                </span><span class="h-28-span2"> но какой ценой? </span></span>
        </div><svg class="group-1" width="390" height="1" viewBox="0 0 390 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="390" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-29"> Можно работать через разговор, через тело или соединять оба подхода — <br />в зависимости от запроса и состояния. </div>
        <div class="frame-42">
            <div class="h-210"> Голова постоянно занята задачами. </div>
        </div>
        <div class="frame-5">
            <div class="h-210"> Отдых не даёт ощущения восстановления. </div>
        </div>
        <div class="frame-8">
            <div class="h-210"> Ошибки возникают там, где раньше <br />всё было очевидно. </div>
        </div>
        <div class="frame-6">
            <div class="h-210"> На простые решения <br />уходит больше сил, чем раньше. </div>
        </div>
        <div class="frame-9">
            <div class="h-211"> Кажется, что энергии хватает <br />только на обязательное. </div>
        </div>
        <div class="frame-7">
            <div class="h-211"> Появляется раздражение, усталость или внутренний шум. </div>
        </div>
    </div>
    <div class="peregrus2">
        <img class="rectangle-4" src="rectangle-40.png" />
        <div class="rectangle-233">
        </div>
        <div class="h-212"> Это не вопрос </div>
        <div class="h-213"> силы воли </div><svg class="group-12" width="390" height="1" viewBox="0 0 390 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="-12" y1="0.5" x2="898" y2="0.5" stroke="var(--dark-baige, #a69684)" />
        </svg>
        <div class="h-214"> Иногда система настолько привыкает жить в напряжении, <br />что начинает считать <br />его нормой. </div>
        <div class="h-215"> Ты уже платишь <br />за перегруз. Возможно, просто ещё не считаешь эту цену. </div>
    </div>
    <div class="frame-21">
        <div class="yourproblems">
            <img class="rectangle-5" src="rectangle-50.png" />
            <div class="rectangle-234">
            </div>
            <div class="h-216"> Что происходит </div>
            <div class="h-217"> на самом деле </div><svg class="group-13" width="390" height="1" viewBox="0 0 390 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-46" y1="0.5" x2="997" y2="0.5" stroke="var(--dark-baige, #a69684)" />
            </svg>
            <div class="h-218"> Проблема не всегда <br />в количестве задач </div>
            <div class="h-219"> Когда напряжение становится постоянным фоном, всё больше ресурсов уходит на то, чтобы просто держаться <br />в рабочем состоянии. </div>
            <div class="h-220"> На ясность, внимание, восстановление, отношения <br />и новые решения остаётся меньше энергии. </div>
        </div>
        <div class="prod">
            <img class="rectangle-6" src="rectangle-60.png" />
            <div class="rectangle-242">
            </div>
            <div class="h-221"> важно работать <br />не только через разговор. </div>
            <div class="h-222"> Чтобы вернуть состояние, <br />в котором продуктивность снова становится возможной, </div>
        </div>
    </div>
    <div class="psycho">
        <img class="rectangle-8" src="rectangle-80.png" />
        <div class="rectangle-243">
        </div>
        <div class="h-223"> Верни себе <br />ясность, ресурс <br />и внутреннюю устойчивость </div>
        <div class="h-224"> работая <br />не только <br />с психикой, <br />но и с телесным напряжением </div>
    </div>
</div>

css

.mob,
.mob * {
    box-sizing: border-box;
}

.mob {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
}

.hero-m {
    background: var(--bg1, #dbd9d2);
    align-self: stretch;
    flex-shrink: 0;
    height: 690px;
    position: relative;
    overflow: hidden;
}

.rectangle-3 {
    width: 307px;
    height: 376px;
    position: absolute;
    left: -18px;
    top: -42px;
    object-fit: cover;
    aspect-ratio: 307/376;
}

.rectangle-2 {
    width: 324px;
    height: 444px;
    position: absolute;
    left: 116px;
    top: 312px;
    object-fit: cover;
    aspect-ratio: 324/444;
}

.rectangle-23 {
    background: rgba(248, 248, 248, 0.50);
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 304px;
    height: 451px;
    position: absolute;
    left: 56px;
    top: -42px;
}

.h-2 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 34px;
    line-height: 130%;
    font-weight: 400;
    position: absolute;
    left: 22px;
    top: 359px;
}

.h-22 {
    color: var(--liteyell, #fde5ba);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 46px;
    line-height: 130%;
    font-weight: 900;
    text-transform: uppercase;
    position: absolute;
    left: 22px;
    top: 314px;
    -webkit-text-stroke: 1px var(--dark-baige, #a69684);
}

.h-23 {
    color: var(--just-content, #302c2b);
    text-align: right;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: absolute;
    left: 192px;
    top: 53px;
    width: 160px;
}

.h-24 {
    color: var(--just-content, #302c2b);
    text-align: right;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: absolute;
    left: 182px;
    top: 216px;
    width: 170px;
}

.rectangle-24 {
    background: rgba(255, 255, 255, 0.41);
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 252px;
    height: 141px;
    position: absolute;
    left: -37px;
    top: 431px;
}

.frame-16 {
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: calc(50% - 178px);
    top: 450px;
}

.frame-4 {
    background: var(--primary, #fab842);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.h-25 {
    color: var(--just-dark, #5c5958);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.frame-3 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 18px 24px 18px 24px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
}

.h-26 {
    color: var(--primary, #fab842);
    text-align: right;
    font-family: 'Onest-SemiBold', sans-serif;
    font-size: 21px;
    line-height: 130%;
    font-weight: 600;
    position: relative;
}

.peregrus {
    background: var(--bg2color, #d4d1c8);
    flex-shrink: 0;
    width: 390px;
    height: 840px;
    position: relative;
    overflow: hidden;
}

.rectangle-21 {
    opacity: 0.8;
    width: 427px;
    height: 551px;
    position: absolute;
    left: 47px;
    top: 5px;
    object-fit: cover;
}

.rectangle-232 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 355px;
    height: 552px;
    position: absolute;
    left: 65px;
    top: 140px;
}

.group-2 {
    position: absolute;
    inset: 0;
}

.h-27 {
    text-align: left;
    position: absolute;
    left: 26.58px;
    top: 28px;
}

.h-27-span {
    color: var(--just-dark, #5c5958);
    font-family: 'Onest-Black', sans-serif;
    font-size: 36px;
    line-height: 100%;
    font-weight: 900;
}

.h-27-span2 {
    color: var(--dark-baige, #a69684);
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
}

.h-28 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    position: absolute;
    left: 12px;
    top: 56px;
}

.h-28-span {
    font-family: 'Onest-Black', sans-serif;
    font-size: 68px;
    line-height: 100%;
    font-weight: 900;
}

.h-28-span2 {
    font-family: 'Onest-Black', sans-serif;
    font-size: 24px;
    line-height: 100%;
    font-weight: 900;
}

.group-1 {
    width: 390px;
    height: 0px;
    position: absolute;
    left: 0px;
    top: 84.91px;
    overflow: visible;
}

.h-29 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 16px;
    line-height: 110%;
    font-weight: 900;
    position: absolute;
    left: 40px;
    top: 769px;
    width: 339px;
    height: 51px;
}

.frame-42 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 13.81px;
    top: 160px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(10deg) scale(1, 1);
}

.h-210 {
    color: var(--beigebg, #e5d7c7);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
}

.frame-5 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 26.7px;
    top: 236px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(6deg) scale(1, 1);
}

.frame-8 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 6px;
    top: 334.42px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.frame-6 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 6px;
    top: 482.24px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-2deg) scale(1, 1);
}

.frame-9 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 296.99px;
    height: 64.36px;
    position: absolute;
    left: 56.61px;
    top: 647px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(5deg) scale(1, 1);
}

.h-211 {
    color: var(--beigebg, #e5d7c7);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    position: relative;
    width: 311px;
}

.frame-7 {
    background: var(--just-dark, #5c5958);
    border-radius: 24px;
    padding: 12px 36px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    left: 3px;
    top: 568.04px;
    box-shadow: var(--2-box-shadow, 8px 18px 2px 0px rgba(176, 156, 134, 0.40));
    transform-origin: 0 0;
    transform: rotate(-3deg) scale(1, 1);
}

.peregrus2 {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 741px;
    position: relative;
    overflow: hidden;
}

.rectangle-4 {
    width: 1026px;
    height: 560px;
    position: absolute;
    left: -359px;
    top: 181px;
    object-fit: cover;
}

.rectangle-233 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 987px;
    height: 410px;
    position: absolute;
    left: 22px;
    top: 40px;
}

.h-212 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 48px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 10px;
    top: 201px;
}

.h-213 {
    color: var(--negative, #f25d34);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 32px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 22px;
    top: 241px;
}

.group-12 {
    width: 910px;
    height: 0px;
    position: absolute;
    left: -12px;
    top: 241px;
    overflow: visible;
}

.h-214 {
    color: var(--dark-baige, #a69684);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 22px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 65px;
    top: 69px;
    width: 280px;
    height: 123px;
}

.h-215 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 18px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 239px;
    top: 474px;
    width: 121px;
    height: 142px;
}

.frame-21 {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 390px;
    position: relative;
}

.yourproblems {
    background: var(--bg2color, #d4d1c8);
    align-self: stretch;
    flex-shrink: 0;
    height: 839px;
    position: relative;
    overflow: hidden;
}

.rectangle-5 {
    background: linear-gradient(90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 82.71278142929077%), linear-gradient(-90deg, rgba(212, 209, 200, 1.00) 0%, rgba(219, 217, 210, 0.00) 100%);
    width: 1143px;
    height: 641px;
    position: absolute;
    left: calc(50% - 631px);
    top: 247px;
    object-fit: cover;
    aspect-ratio: 1143/641;
}

.rectangle-234 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 399px;
    height: 603px;
    position: absolute;
    left: 72px;
    top: 67px;
}

.h-216 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 48px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 6px;
    top: 301px;
}

.h-217 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Black', sans-serif;
    font-size: 32px;
    line-height: 100%;
    font-weight: 900;
    position: absolute;
    left: 6px;
    top: 349px;
}

.group-13 {
    width: 1043px;
    height: 0px;
    position: absolute;
    left: -46px;
    top: 341px;
    overflow: visible;
}

.h-218 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Bold', sans-serif;
    font-size: 18px;
    line-height: 110%;
    font-weight: 700;
    position: absolute;
    left: 115px;
    top: 109px;
    width: 253px;
}

.h-219 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 18px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 115px;
    top: 171px;
    width: 237px;
}

.h-220 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Regular', sans-serif;
    font-size: 18px;
    line-height: 110%;
    font-weight: 400;
    position: absolute;
    left: 213px;
    top: 497px;
    width: 155px;
    height: 142px;
}

.prod {
    background: #cfcdc6;
    align-self: stretch;
    flex-shrink: 0;
    height: 579px;
    position: relative;
    overflow: hidden;
}

.rectangle-6 {
    background: linear-gradient(270deg, rgba(207, 205, 198, 1.00) 0%, rgba(212, 209, 200, 0.00) 100%), linear-gradient(-89.89deg, rgba(229, 215, 199, 1.00) 0%, rgba(207, 205, 198, 1.00) 100%), linear-gradient(to left, #f4e3d6, #f4e3d6);
    width: 821px;
    height: 500px;
    position: absolute;
    right: -37px;
    top: 93px;
    object-fit: cover;
    aspect-ratio: 821/500;
}

.rectangle-242 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 399px;
    height: 322px;
    position: absolute;
    left: 380px;
    top: 92px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-221 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 99px;
    top: 425px;
    width: 184px;
}

.h-222 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 24px;
    line-height: 110%;
    font-weight: 500;
    position: absolute;
    left: 46px;
    top: 46px;
    width: 345px;
    height: 100px;
}

.psycho {
    flex-shrink: 0;
    width: 388px;
    height: 459px;
    position: relative;
    overflow: hidden;
}

.rectangle-8 {
    background: radial-gradient(closest-side, rgba(212, 207, 198, 1.00) 0%, rgba(253, 234, 219, 0.00) 100%), linear-gradient(to left, #dbd9d2, #dbd9d2);
    width: 876px;
    height: 459px;
    position: absolute;
    left: -251px;
    top: 0px;
    object-fit: cover;
    aspect-ratio: 876/459;
}

.rectangle-243 {
    border-radius: 24px;
    border-style: solid;
    border-color: var(--dark-baige, #a69684);
    border-width: 1px;
    width: 708px;
    height: 414px;
    position: absolute;
    left: 349px;
    top: 21px;
    transform-origin: 0 0;
    transform: rotate(0deg) scale(-1, 1);
}

.h-223 {
    color: var(--text-assent, #ba872c);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 16px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 19px;
    top: 33px;
    width: 145px;
    height: 91px;
}

.h-224 {
    color: var(--just-dark, #5c5958);
    text-align: left;
    font-family: 'Onest-Medium', sans-serif;
    font-size: 16px;
    line-height: 100%;
    font-weight: 500;
    position: absolute;
    left: 19px;
    top: 144px;
    width: 199px;
    height: 133px;
}

без самодеятельности пиксель в пиксель на астро все секции свкрить

