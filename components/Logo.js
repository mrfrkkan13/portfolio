import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <div className="mr-3">
        <Image src="/static/images/logopng.png" alt="Ömer Faruk Kan" width={40} height={40} />
      </div>
    </div>
  );
};

export default Logo;
