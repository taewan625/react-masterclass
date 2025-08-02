import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

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
    refetchInterval: 10000,
  });

  return (
    <>
      {isLoading ? (
        <div>isloading</div>
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((coin) => {
                  return {
                    x: coin.time_close,
                    y: [coin.open, coin.high, coin.low, coin.close],
                  };
                }) ?? [],
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
    </>
  );
}

export default Price;
