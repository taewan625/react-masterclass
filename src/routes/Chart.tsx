import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface charProps {
  coinId: string;
}

interface Ihistorical {
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
  const { isLoading, data } = useQuery<Ihistorical[]>({
    queryKey: ["chart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: { curve: "smooth", width: 3 },
            yaxis: { show: false },
            xaxis: { labels: { show: false }, axisTicks: { show: false } },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
