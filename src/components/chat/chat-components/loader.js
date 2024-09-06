import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Loader = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item) => (
        <>
            <div className="chat-mess-one-block">
                <span><span className='mr'><Skeleton height={65} width={525}/></span></span>
                 <div className="block-chat-info">
                    <p className="time"><Skeleton height={15} width={50}/></p>
                </div>
            </div>
             <div className="chat-mess-two-block">
                <span><span className='mr'><Skeleton height={45} width={325}/></span></span>
                 <div className="block-chat-info">
                    <p className="time"><Skeleton height={15} width={50}/></p>
                </div>
            </div>
            
        </>
    ));
};

export default Loader;