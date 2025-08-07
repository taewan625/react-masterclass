import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface Ihistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

function Price() {
  const { coinId } = useParams<{ coinId: string }>();

  const { isLoading, data } = useQuery<Ihistorical[]>({
    queryKey: ["chart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    //refetchInterval: 10000,
  });

  return (
    <>
      {isLoading ? (
        <div>isloading</div>
      ) : (
        <CardWrapper>
          <Card>
            <span>Now Highest Price</span>
            <span>
              {data ? Math.max(...data.map((data1) => +data1.high)) : "N/A"}
            </span>
          </Card>
          <Card>
            <span>Now Lowest Price</span>
            <span>
              {data ? Math.min(...data.map((data1) => +data1.high)) : "N/A"}
            </span>
          </Card>
        </CardWrapper>
      )}
    </>
  );
}

export default Price;
