import Image from 'next/image'

const Health = () => {
  return (
    <div className='align-center'>
      <Image
        src="/images/nucleus.png"
        width={360}
        height={480}
        alt="App pic"
      />
    </div>
  );
};

export default Health;
