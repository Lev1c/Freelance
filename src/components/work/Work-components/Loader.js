import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item) => (
        <div className="list-task">

                <div className="list-task-ads-block-two">
                    <div className="block-list-task-main">
                        <h1><Skeleton height={25} width={250}/></h1>
                        <div className='block-list-task-txt'>
                            <span className='block-list-task-text-price'><Skeleton height={30} width={80}/></span>
                            <span className='block-list-task-text'><Skeleton height={30} width={100}/></span>
                        </div>
                    </div>
                    <span className='block-list-task-text-under'></span>
                    <span className='block-list-task-text-under'><Skeleton height={47} width="100%"/></span>
                    <ul className="list-task-ads-ul">
                    </ul>
                    <div className='list-task-ads-gen'>
                        <div className='list-task-ads-star'>
                            <span className='mr'><Skeleton height={25} width={125}/></span>
                            <span className='ml'><Skeleton height={25} width={50}/></span>
                        </div>
                        <span><Skeleton height={25} width={80}/></span>
                    </div>
                </div>
        </div>
    ));
};

export default Loader;


