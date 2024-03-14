import * as S from "../styles";

import { Banner } from "../../../types";
import { Button } from "../../../components";
import { useTranslations } from "../../../hooks/useI18n";

type Props = {
  banner: Banner;
};

export const HomeBanner = ({ banner }: Props) => {
  const t = useTranslations();
  return (
    <S.BannerInner>
      <S.BannerImage>
        <picture>
          <img
            alt={banner.title}
            aria-hidden="true"
            sizes="100vw"
            src={banner.image}
          />
        </picture>
      </S.BannerImage>
      <S.BannerBackdrop />
      <S.BannerContent>
        <S.BannerContentImage src={banner.headline} alt="" />
        <div>
          <small>14</small> <strong>2021</strong>
        </div>
        <p>{banner.description}</p>
        <div>
          <Button variant="filled">{t["banner.watch"]}</Button>
        </div>
      </S.BannerContent>
    </S.BannerInner>
  );
};
