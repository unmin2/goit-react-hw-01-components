
import { GlobalStyle } from './GlobalStyle';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transaction from '../transactions.json'
import { Profile } from './profile/profile'
import { Statistics } from './statistics/statistics'
import { FriendList } from './friendList/friendList'
import { TransactionHistory } from './transaction/transaction'
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      <Statistics title="Upload stats" stats={data} />      
      <FriendList friends={friends} />
            <GlobalStyle />
      <TransactionHistory items={ transaction } />
    </>
    );  
};