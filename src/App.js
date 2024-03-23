import './App.css';
import expenses from './data.json';

function App() {

  return (
    <div className="bg-cream flex flex-col pt-[67px] pb-[66px] md:py-0 md:pt-0 md:justify-center items-center h-screen">
      <div className="w-full px-4 md:w-[540px]">
        
        <div className="flex justify-between bg-soft-red mb-4 md:mb-6 rounded-mobile md:rounded-desktop py-5 px-5 md:px-8 md:py-[25px]">
          <div>
            <p className="text-white text-body md:text-h4 font-regular md:mb-2">My balance</p>
            <p className="text-card-white text-h3 md:text-h2 font-bold">$921.48</p>
          </div>
          <div className="self-center">
            <img src="logo.svg" alt="Logo" />
          </div>
        </div>

        <div className="bg-card-white rounded-mobile md:rounded-desktop px-5 py-6 md:pt-8 md:px-10 md:pb-10">
          <p className="text-dark-brown text-h3 md:text-h2 font-bold">Spending - Last 7 days</p>
          
          <div className="grid grid-cols-7 items-end mt-[4.5px] md:mt-[20px] mb-5 md:mb-8 h-[220px] md:h-[230px]">
            {expenses.map(expense => <Bar key={expense.day} {...expense}/>)}
          </div>

          <hr className="h-[1px] color-[#979797] mb-6 md:mb-8" />
          
          <p className="text-medium-brown text-body md:text-h4">Total this month</p>
          
          <div className="flex justify-between">
            <p className="text-dark-brown text-[30px] md:text-h1 font-bold">$478.33</p>
            <div className="self-center">
              <p className="text-right text-dark-brown font-bold text-body md:text-h4">+2.4%</p>
              <p className="text-medium-brown text-body md:text-h4">from last month</p>
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4 px-4 text-subtitle sm:text-body">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a className="text-soft-red" href="https://semajprimm.com">Semaj Primm</a>.
      </div>
    </div>
  );
}

export default App;


function Bar({...props}){

  // Gets the day of the week
  const weekDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()];
  
  // Sets colour based on whether today is the same day of the week or not
  const barColor = props.day === weekDay ? "bg-cyan group-hover:bg-pale-cyan" : "bg-soft-red group-hover:bg-pale-orange";

  // Calculates the height with a factor of 2.8661 and rounds up
  const barHeight = `${Math.round(props.amount * 2.8661)}px`;

  return(
    <div className="group flex flex-col items-center">
      <div 
        className="hidden group-hover:block px-1 md:px-[10px] py-[5px] mb-2 text-center text-[12px] md:text-body font-medium bg-dark-brown text-white rounded-[5px]"
      >
        {`$${props.amount}`}
      </div>
      <div 
        className={`${barColor} w-[33px] md:w-[50px] rounded-[5px]`} 
        style={{height: barHeight}}
      ></div>
      <p className="text-medium-brown text-body text-center pt-2">{props.day}</p>
    </div>
  )
}