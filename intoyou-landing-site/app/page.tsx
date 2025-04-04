
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Bring the life to the world</h1>
        <p className="text-lg max-w-xl mx-auto">
          세상이 정해준 정답이 아닌, 당신이 진짜 원하는 삶을 살아가길 바랍니다. IntoYou는 그런 당신의 첫걸음을 돕는 취업 컨설팅 브랜드입니다.
        </p>
      </section>

      <section className="max-w-2xl w-full space-y-6">
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">왜 시작했나요?</h2>
          <p>
            “스펙이 부족해서 떨어졌나?”, “어떻게 써야 붙을 수 있을까?” — 많은 취준생들이 같은 고민을 합니다.
            저 역시 같은 길을 걸었고, 수많은 불합격을 겪으며 결국 대기업에 입사하게 되었습니다.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">어떻게 극복했나요?</h2>
          <p>
            자소서를 끊임없이 고치고, 면접을 실전처럼 연습하며 깨달았습니다. 중요한 건 진심, 그리고 전략이라는 사실을요.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">그 과정에서 배운 것</h2>
          <p>
            많은 취준생들이 방향 없이 자기소개서를 쓰고, 남의 기준에 맞춰 자신을 설명합니다. 저는 그런 점들을 짚어주고, 진짜 나를 담은 자소서로 바꿔주는 과정을 통해 합격 가능성을 높이고자 합니다.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">IntoYou의 프로그램</h2>
          <p>
            예전의 저처럼, 길을 잃은 누군가에게 필요한 도움을 주고 싶습니다. 그래서 "취업 탈출 프로그램"을 만들었습니다. 단순한 코칭이 아니라, 함께 고민하고 함께 성장하는 시간입니다.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">소수 정예 무료 컨설팅</h2>
          <p>
            저희는 진심으로 변화하고자 하는 분들과 함께 하고 싶습니다. 그래서 매 차수, 단 5명만 선정하여 무료로 1:1 자소서 컨설팅을 진행합니다.
          </p>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            지금 신청하기
          </a>
        </div>
      </section>
    </div>
  );
}
