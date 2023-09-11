import profile from '../../assets/img/img (2).jpg'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 border-b-2 max-w-7xl mx-auto'>
      <h1 className="text-4xl mt-4 font-bold">Knowledge Cafe</h1>
      <img className='w-20 h-20 rounded-full' src={profile} alt='profile-pic' />
    </header>
  );
};

export default Header;
