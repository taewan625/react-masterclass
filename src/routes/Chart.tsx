import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

interface charProps {
  coinId: string;
}

interface history {
  close: number;
  high: number;
  low: string;
  market_cap: string;
  open: string;
  time_close: string;
  time_open: string;
  volume: number;
}

function Chart({ coinId }: charProps) {
  const { isLoading, data } = useQuery<history>({
    queryKey: ["chart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  console.log(data);

  return <h1>Chart</h1>;
}

export default Chart;
