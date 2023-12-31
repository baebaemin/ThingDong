import { useMemo } from 'react'; // 안 써도 될듯?
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideWrapper } from '@/components/organisms/Slick/Slick.styles';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
}

function Slick({
  children,
  className,
  autoplay = false,
  speed = 300,
  loop = false,
}: SliderProps) {

  // slick option값 설정
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: false,
      speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
    }),
    [autoplay, loop, speed]
  );
  
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

export default Slick;