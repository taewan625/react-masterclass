import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in-out;
    display: block;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // step 1
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //useEffect: component 시점 선택 가능 2nd params로 조절
  //조건 종류
  // 1) []: 처음 마운트될 때 1번만
  // 2) [a, b]: a, b 값이 변경될때마다 변경
  // 3) 없음: 렌더링마다 매번 실행
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins"); //api응답 기다림
      const json = await response.json(); //해당 응답의 body 추출 body 추출 작업 자체가 비동기 작업
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              {/* a tag는 새로고침이 있어서 Link를 사용 */}
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
