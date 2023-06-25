import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <StyledMovies>
      {/* moviePosters.map((el)=>(
            <div>
                <img id=`movie_{count}` src=`../../../data/posterImg/movie_${count}`>
            </div>
        )) */}
      <div className="movies">
        <div>
          <img
            id="movie_1"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS9-OOODTb5-uFVB2zsI5Rky5DJmD5juJthbCkcQr0cLMFbqk8UILQZoTh9EaM7oD6mYOZAUf7u4ExszjUNqCButD30mhGgHOQY.webp?r=3be"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_2"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYxicJNVn3-ZD5sxZ674NQr04fFdQnupFdAQ2kivWqGSR5Px5ZJ6cJ7HkrHfThKaLi4gPLZwkdcXM_3Eba_5mJVt4EdEVVxa7yI.webp?r=28b"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_3"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU0n0AF9sAV9qVPhM-jFXkS8XAaAKBr0kb8OiRUPgdrwjUEdMtFPLOh0x7prz75BdiLKclFA3Gnn6a72YpWOyKVp4aqx3gspahs.webp?r=49a"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_4"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWVNybh0JYlD2EQHkYnTqa1RUYghvq-3KAhpu2AKfqHhDbkDdJ4iprAG9QtvMPaqxKYPzmz1sMp2xRo6L0L-ppBmA2p4AAdv9Cg.webp?r=edc"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_5"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVYS1daKb9bmiEA6E9M3Z32WZkEM0MIg1_cSTXMV67XrIyalnGOAe1VNKsZTDpZlzWKyMJm6nxa2vXqG7ALPOGlytBLPNuqlQLA.webp?r=4ac"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_6"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRvOLQ-wsc4r6tmR_gbmVlIOwUwcFviiS1Xk4_nbSVBanZLS9D7GZw674mW-QBgd2hLlVLRK-96Fqkdkh-bnsRDqiwFt5JHcNPw.webp?r=03a"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_7"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQf34M4q_o62RVEGpNyFM0XRHOUKBPEkIKfyNn-i9Y3MFy27_Azy7uEDYZoktRuMuiCpMcrt0gN-HAdPFtawOVDRaBvQJjDNpPw.webp?r=223"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_8"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUD1iXl8iWuBm6Mofsv9bQFsFswR63n2f5V9CQaK0y6mflSE70Hj0QZbSWdB7tXlP6IHU_o4zQRDXPgpeXUrEuH3LK8pY9eWzzI.webp?r=753"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_9"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdvETZSn6nA2iPvWzkg8RcvPrEnLp0_4UDRWG8DPZ5DBRIP8Rh_G869Maw5j9QCTKp3q6Qy4EeFB5b_jxaFryGwnMw9fefkyEqI.webp?r=374"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_10"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUKxQBwyA2ttBKenR0CsbKcZ6GeysANJ4MNNSwEEI2gw-6Cu9PJCu43VV_qsvtDgu75_ucG3LrKOrrJuymolXtnNCPlF2k2n_3E.webp?r=c46"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_11"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTwCnkIYk6fkRizoyTd4x7HoDVWTKs3TF9M6Uq7AKnRzy8EEZbzh8DiC1RSEJD4JtJspSD26PnthZTrViwqe4a6DtTvcn0JaKeg.webp?r=322"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_12"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe7dkzOBvE3sh7DXj_bGl_0rEznvJBRril-K3VRkffrE2Y2D2-hDl66s1zZZHCuzN8k1wCkj0DDsj4UJiMO2rnJexMQFk3NrtuU.webp?r=0d3"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_13"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUgH5V8v4i3dderGbqG4fnM340hEkYJn9dn5BlYUr2rxYoIhoe7FCEDtUdqjob8SVK5Id9ZQJ1zrxX4qBl7Z4gu5dGgy_zsWR5g.webp?r=01a"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_14"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeSj8vBMUdQJ6Mre0hJLdRFJYyUwQUKbwQtgkbVTDVvdQ1rFrSPj-KZb8te5rwGXy88rHR2MwyEIY2j16w2GRyksrjcifx5GVkA.webp?r=630"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_15"
            src="http://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbihVL-2PS7j5UYe5RtaA-Wsf726Cggfs4XADIggpoZwgzSe-l4bQfAWDmiSHo8b1x3tSbRdVWSzZzBOeYvgBhCVE2NlCJ1_mzA.webp?r=e39"
            alt=""
          />
        </div>
        <div>
          <img
            id="movie_16"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSxyN795LrIudE0V132pzDikP-_s0X9hVLvetdCfyvKzOKTYwJB8TI4oqZa_S9UZsMegRijG290LwjACsNnFdYht4P87mj8F4Ko.webp?r=7b0"
            alt=""
          />
        </div>
      </div>
    </StyledMovies>
  );
}

const StyledMovies = styled.div`
  .movies {
    width: 100%;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    gap: 50px 5px;
    place-items: center;
    /* box-sizing: border-box; */
    /* border: 1px solid red; */
  }
  .movies div {
    cursor: pointer;
  }
  .movies div img {
    border-radius: 4px;
    max-width: 100%;
    height: auto;
  }

  // media query
  @media (max-width: 1199px) {
    .movies {
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    .movies {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    .movies {
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 575px) {
    .movies {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }
`;

export default Movies;
