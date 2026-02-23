// error page for unmatched routes
import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/Error404.json'; 

function NotFound() {
  return (
    <div style={{ 
      overflow: 'hidden',
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8' 
    }}>
      
      {/* Lottie Animation */}
      <div style={{ width: '400px', height: '400px', margin: '20px auto' }}>
        <Lottie 
          animationData={notFoundAnimation} 
          loop={true} 
        />
      </div>
     
    </div>
  );
};

export default NotFound;