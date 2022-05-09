import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout();
        navigate('/');
      } catch (e) {
        console.log(e.message);
      }
    };
    return (
        <div className='h-[100px] flex items-center justify-evenly p-4 z-[100] w-full bg-black/30 text-white absolute'>
            <Link to='/'>
                <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>
                    Iris
                </h1>
            </Link>
            <div className='flex items-center justify-between'> 
                <Link className='text-black pr-4 hover:text-red-400' to="/store">Trgovina</Link>
                <Link className='text-black pr-4 hover:text-red-400' to="/contact">Kontakt</Link>
                <Link className='text-black pr-4 hover:text-red-400' to="/info">O nama</Link>
                {user?.email ? 
                (
                    <div>
                        <div className='flex items-center justify-evenly'>
                            <p className='text-black'>{user.email}</p>
                            <button onClick={handleLogout} className='h-10 px-4 m-2 border py-2 text-black'>
                                Logout
                            </button>
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <Link className='text-black pr-4 hover:text-red-400' to="/signin">Sign In</Link>
                        <Link className='text-black pr-4 hover:text-red-400' to="/signup">Sign Up</Link>
                    </div>
                )}
            </div>
            
        

        </div>
      );
}
 
export default NavigationBar;