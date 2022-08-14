import * as React from "react"
import { colors } from "../colors.css.ts"
export default function PitchLogo({ color = "white" }) {
  return (
    <svg
      width="116"
      height="37"
      viewBox="0 0 116 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.656 2.40017H0.271973V36.0002H5.74397V24.6242H12.656C19.232 24.6242 24.128 19.8722 24.128 13.5362C24.128 7.15217 19.184 2.40017 12.656 2.40017ZM12.416 19.3922H5.74397V7.63217H12.416C16.016 7.63217 18.512 10.1282 18.512 13.5362C18.512 16.8962 16.016 19.3922 12.416 19.3922ZM29.2273 6.09617H34.6993V0.576172H29.2273V6.09617ZM29.3233 36.0002H34.6513V10.0802H29.3233V36.0002ZM53.7339 31.2002C50.6139 31.2002 48.8859 29.4722 48.8859 26.3522V14.6882H56.5659V10.0802H48.8379V4.03217H47.9259L38.9019 13.6322V14.6882H43.5579V26.7842C43.5579 32.4962 47.0619 36.0002 52.7259 36.0002H56.7099V31.2002H53.7339ZM73.2841 36.6722C79.6681 36.6722 84.8041 32.6402 86.1961 26.5922H80.8201C79.4281 29.7602 76.6921 31.5842 73.2841 31.5842C68.6761 31.5842 65.1241 27.8402 65.1241 23.0402C65.1241 18.2402 68.6281 14.5442 73.2841 14.5442C76.6441 14.5442 79.5241 16.3682 80.8681 19.3442H86.1481C84.7081 13.3922 79.7161 9.45617 73.2841 9.45617C65.5561 9.45617 59.7001 15.3122 59.7001 23.0402C59.7001 30.7682 65.5561 36.6722 73.2841 36.6722ZM105.208 9.50417C101.752 9.50417 98.7755 10.8482 96.8075 13.0562V0.816172H91.4795V36.0002H96.8075V22.1282C96.8075 17.5682 99.7355 14.3042 103.768 14.3042C107.704 14.3042 109.72 16.8002 109.72 21.5042V36.0002H115.048V20.4002C115.048 13.7282 111.256 9.50417 105.208 9.50417Z"
        fill={colors[color]}
      />
    </svg>
  )
}
