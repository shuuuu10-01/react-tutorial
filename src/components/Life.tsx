import * as React from "react";
import "../App.css";
import Title from "./Title";
import { Chrono } from 'react-chrono';

const skill: React.CSSProperties = {
  position: "relative",
  margin: "0",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

class Life extends React.Component {
  render() {
    const title = "Life&Education";
    const items = [
      {
        title: "1999 10月",
        cardTitle: "誕生",
        cardSubtitle: "10月1日に福岡で生まれる",
        cardDetailedText: "",
      },
      // {
      //   title: "2015 8月",
      //   cardTitle: "高校入学",
      //   cardSubtitle: "家の近くにあった高校に入学",
      //   cardDetailedText: "",
      // },
      {
        title: "2018 4月",
        cardTitle: "大学入学",
        cardSubtitle: "九州工業大学 情報工学部に入学",
        cardDetailedText:
          "入学して初めてプログラミングに触れました(C言語)。プログラミングが楽しいと気づきました。",
      },
      {
        title: "2019 11月 ~ 2020 7月",
        cardTitle: "プログラミングのアルバイトを経験",
        cardSubtitle: "",
        cardDetailedText:
          "飛躍的に技術が向上しました。感謝しかないです。主にC++を用いた業務を行いました。プログラミングを仕事にすると決心しました。",
      },
      {
        title: "2020 8月",
        cardTitle: "はじめての成果物",
        cardSubtitle: "LINEbotを作成",
        cardDetailedText:
          "受験生向けに大学の学科をおすすめするbotを作成しました。Pythonを使いました。2択の質問に答えることでその人にあった学科を返信するシステムでした。",
      },
      {
        title: "2020 9月",
        cardTitle: "はじめてのハッカソン",
        cardSubtitle: "vue.jsをはじめて学習",
        cardDetailedText:
          "失敗を経験し、メンターの方々やそこで出会った先輩に多くのものを学びました。(ハッカソン最高！！)",
      },
    ];
    return (
      <div style={skill} className="home-child">
        <Title title={title} />
        <Chrono
          items={items}
          slideShow
          mode="VERTICAL"
          slideItemDuration={450}
          hideControls
        />
      </div>
    );
  }
}
export default Life
