# 해커톤 보고서

 * 팀명  
  : KING
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
   : WebRTC를 통해 영상/음성 미디어를 (웹 애플리케이션과 사이트의) 브라우저 간에 별도 중간자 없이 포착 및 스트림한다. 데이터 공유와 화상 회의를 가능하게 한다.  

   <!-- ex -->
    ![WebRTC](https://drive.google.com/file/d/1QJeYbCh9Ie7w2KhJJlO8dmxfumFhCTRb/view?usp=sharing)


2) 플라스크 클라우드 웹 서버를 이용한 동적 페이지 라우팅  


3) Socket.io 모듈을 통해 실시간 상호작용 웹서비스를 만드는 웹 소켓 사용  
~~~JavaScript
socket.on("welcome", async () =>{ //소켓이 방에 참여했을때
    const offer = await myPeerConnection.createOffer(); //offer가 누군지 정해줘.
    myPeerConnection.setLocalDescription(offer);
    //console.log("send offer");
    socket.emit("offer", offer, roomName);
}); //peer A에서 작동

socket.on("offer", async (offer) => {
    myPeerConnection.setRemoteDescription(offer);
    const answer = await myPeerConnection.createAnswer();
    myPeerConnection.setLocalDescription(answer);
    socket.emit("answer", answer, roomName);

}); //peer B에서 작동

socket.on("answer", (answer) =>{
    myPeerConnection.setRemoteDescription(answer);

}); //peer A에서 작동

socket.on("ice", (ice) => { //iceCandidate를 주고받는 부분. handleIce와 세트
    //console.log("ice??????")
    myPeerConnection.addIceCandidate(ice);
});
~~~
