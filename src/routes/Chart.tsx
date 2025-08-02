import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface charProps {
  coinId: string;
  isDark: boolean;
}

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

function Chart({ isDark, coinId }: charProps) {
  const { isLoading, data } = useQuery<Ihistorical[]>({
    queryKey: ["chart", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 10000,
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
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: { curve: "smooth", width: 3 },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close) ?? [],
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["red"], stops: [0, 100] },
            },
            colors: ["blue"],
            tooltip: { y: { formatter: (value) => `$${value.toFixed(2)}` } },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
