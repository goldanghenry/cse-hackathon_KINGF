# 해커톤 보고서

 * 팀명  
  : KINGF
---

* 제출 세션 및 주제  
: 특별세션  
  - 팬데믹시대 모임, 심리적 지원 부족
  - 세대/계층/지역 교육편차
  - 지역산업 활성화 및 일자리 창출  
---

  

* 프로젝트 한 줄 설명  
: 팬데믹시대에 있어 대구시민에 대한 심리적 지원부족 및 취약계층 청소년의 학업소외를 해소하기 위해 WebRTC 기술과 플라스크 클라우드 웹 서버, Socket.io를 이용하여 만든 실시간 온라인 상담 웹 개발.
---

* 프로젝트에 대한 설명  
: 코로나 19로 인해 우리의 생활은 많은 변화를 겪었다.  
  국내외 공공 건강 기구는 물리적으로, 사회적으로 거리두기 및 외출 금지를 권고하였으며, 비대면 정책 및 생활은 개개인의 일상에 급진적인 변화를 초래하였다. 대면 생활이 비대면으로 전환되면서 일-공부-휴식 간의 경계가 무너지고, 대면 환경에서의 긍정적인 교류의 기회가 줄어들게 되었다.
   
 코로나 19 이후 비대면 서비스에 대한 요구가 증가하고 있기에 비대면 교육, 비대면 상담 등의 '언택트(untact)' 방식이 확장되고 있다. 동시에 비대면 상담이라는 용어가 익숙하지 않을 수도 있다. 상담은 상담사와 내담자의 대면적인 감정, 즉 표정, 눈빛, 제스처, 목소리 톤의 차이를 교류하기 때문이다. 하지만 비대면 상담이 짧은 시간 내 확장되어 사용되고 있다는 점을 고려할 때, 비대면 상담을 통한 심리 상담의 서비스 확대 가능성을 무시할 수 없다.  
 
 비대면 상담이 도입된 초기에는 매체 혹은 기계의 사용이 상담 과정에 부정적인 영향일 미칠 것이라는 우려가 많았다. 위에 언급했던 것처럼 일부 학자들은 대면 상담이 더 효과적이고 친밀감이 높으며, 신체적인 언어와 증상을 직접 관찰하여 내담자의 문제를 보다 더 면밀히 파악할 수 있다고 주장하였다(Nguyen et al., 2004; Robson & Robson, 1998). 코로나가 창궐한지 3년이 지난 지금, 점차 비대면 상담의 유용성과 효과성을 증명하는 연구 결과들이 보고되기 시작하였다(Vincent et al., 2017; 이동훈 외, 2015).  
 
 해외 연구를 참고하자면 다양한 호소문제와 연령대의 성인 내담자를 전화 상담, 화상 상담, 대면 상담 집단 및 통제집단에 참여하게 한 후, 증상의 호전 정도를 비교하였는데 전화, 화상, 대면 상담에 참여한 사람들이 통제 집단에 비해 증상 호전을 보였다. 또한, 화상 상담과 대면 상담의 효과를 비교하였을 때 내담자들의 주된 문제가 감소된 것으로 확인한 연구 결과가 있다.  
 
 팀 KINGF는 코로나 19 이후 개인이 겪는 정서적, 사회적, 경제적 문제를 해결하기 위해 비대면 심리 상담 플랫폼 '대구시, 마음과 마음을 잇다'(이하 '맘잇맘') 프로젝트를 제안한다. 또한 심리 상담의 개개인의 부담을 넘어서 세대와 계층, 지역 간의 교육 편차를 줄이고, 비대면 상담에서 대면 상담의 물리적, 지리적 제약과 불편함을 완화시켜 지역 상담사, 주민들에 대한 일자리가 창출되기를 기대해본다.  

  1) 심리적 지원
  
     첫째, 물리적인 접근용이성과 편리성이다. 공간적인 제약이 없으며 물리적인 이동에서 발생하는 시간과 에너지, 비용을 절약할 수 있다. 또한 시간적 여유가 없는 사람들도 언제든지 부담감 없이 심리 상담 서비스에 접근할 수 있다. 
     
     '맘잇맘'은 비단 대구광역시 뿐만 아니라 상담자나 상담센터가 충분하지 않은 경북 내 다른 지역까지도 이 서비스가 도달할 수 있을 것이다. 
     
     둘째, 금전적 부분이다. 상담 비용, 주차장 사용 비용, 치료비 등 심리 상담하면 떠오르는 비용적인 부분이 없기에 사회경제적 제약으로 인해 서비스 받기 어려워하는 개인들에게 유용할 것이다.
     
     셋째, 심리적 편안함이다. 우리가 흔히 '정신 건강', '심리 상담'을 떠올렸을 때 함께 떠오르는 장벽 및 낙인 등으로 인해 심리상담을 꺼리는 개인들의 부담감을 낮출 수 있다. 상담 받는 것이 타인에게 노출되지 않기 때문이다.
     
     함께, 상담 센터라는 새로운 공간에서 새로운 사람을 만난다는 것이 부담스러울 수도 있는 점을 팀 KINGF는 인지했다. 그게 나의 문제를 꺼내는 심리 상담이라고 하면 더 불편하다. 같은 공간에서 상호작용이 이루어지지 않기에 여기서 오는 심리적 부담감, 예를 들면 긴장감과 어색함을 덜 느낄 것이다. 비대면 상담에서 심리적 부담감을 덜 느끼면서 솔직한 자기개방과 상담에 집중할 수 있다.


  2) 학업 지원  
  청소년들을 위한 1:1 멘토링이다. 멘토는 대학생을 대상으로 진행된다. 코로나 19로 인해 발생한 학업, 정서, 사회성 결손 문제로 어려움을 겪고 있는 청소년들을 대상으로 진행되는 멘토링은 1:1 학습 지도를 통해 학습 의욕에 동기를 부여하고자 한다.  
  동시에 이를 통해 진로 상담도 진행할 수 있다. 다양한 진로 상담 기회를 갖지 못하는 소외 지역 학교를 대상으로 비대면 상담을 해준다면 지역 간 혹은 계층 간 기회 격차를 해소를 해결할 수 있을 것이라 기대해본다. 

  3) 지역산업 활성화 및 공공일자리 창출  
코로나 19로 인해 대면 상담을 하기 어려워짐에 따라 기존 상담사들의 실업 현상이 있었다. 온라인 상담 프로젝트를 통해 기존 상담사에게 일자리를 제공하고, 새로운 상담사 또한 배출해낸다. 대학생을 포함한 일반인도 상담사로 가입할 수 있으며 재능기부를 통한 봉사시간을 얻고 봉사 의식을 고취시키도록 한다.

<참고 문헌>

Robson, D., & Robson, M. (1998). Intimacy and computer communication.   British Journal of Guidance and counselling, 26(1), 33-41. 

Nguyen, H. Q., Carrieri-Kohlman, V., Rankin, S. H., Slaughter, R., & Stulbarg, M. S. (2004). Internet-based patient education and support interventions: a review of evaluation studies and directions for future research. Computers in Biology and Medicine, 34(2), 95-112. 

이동훈, 김주연, 김진주 (2015). 온라인 심리치료의 가능성과한계에대한탐색적연구.한국심 리학회지: 상담 및 심리치료, 27(3), 543-582. 

Vincent, C., Barnett, M., Killpack, L., Sehgal, A., & Swinden, P. (2017). Advancing telecommunication technology and its impact on psychotherapy in private practice. British Journal of Psychotherapy, 33(1), 63-76. 

김은하, 이은설, 조예지.(2021).대학상담센터 내담자들의 비대면 심리상담 경험에 대한 질적 연구.상담학연구,22(2),85-110.


---
*   프로젝트에 활용된 기술  
1) WebRTC (Web Real-Time Communication)  
   : WebRTC를 통해 영상/음성 미디어를 (웹 애플리케이션과 사이트의) 브라우저 간에 별도 중간자 없이 포착 및 스트림한다. 비디오와 오디오 스트림을 곻유하여 
     화상 회의를 가능하게 한다. 이 외에도 다양한 데이터를 주고받을 수 있다. 시그널링 과정에서 서버가 사용되나, 데이터가 서버를 거치지 않는 것이 특징이다.

   <!-- ex -->
    ![WebRTC](data:image/png;base64,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)


2) 플라스크 클라우드 웹 서버를 이용한 동적 페이지 라우팅  


3) Socket.io 모듈을 통해 실시간 상호작용 웹서비스를 만드는 웹 소켓 사용
   : Socket.io는 실시간 웹 애플리케이션을 위한 이벤트 라이브러리 이다. 웹 클라이언트와 서버 간의 실시간 양방향 통신을 가능하게 한다.
     이 프로젝트에서는 Socket.io 서버를 http 서버 위에 띄우고, 소켓 간의 통신으로 시그널링 과정을 수행하였다. 
     예시 코드는 시그널링 과정의 일부이다.
~~~JavaScript
socket.on("welcome", async () =>{ //소켓이 방에 참여했을때
    const offer = await PeerConnection.createOffer(); //offer가 누군지 정해줘.
    PeerConnection.setLocalDescription(offer);
    //console.log("send offer");
    socket.emit("offer", offer, roomName);
}); //peer A에서 작동

socket.on("offer", async (offer) => { //offer를 받고 answer를 보낸다.
    PeerConnection.setRemoteDescription(offer);
    const answer = await PeerConnection.createAnswer();
    PeerConnection.setLocalDescription(answer);
    socket.emit("answer", answer, roomName);

}); //peer B에서 작동

socket.on("answer", (answer) =>{ //answer를 가지고 description을 정해준다.
    PeerConnection.setRemoteDescription(answer);

}); //peer A에서 작동

socket.on("ice", (ice) => { //iceCandidate를 주고받는 부분. handleIce와 세트
    PeerConnection.addIceCandidate(ice);
});
~~~
