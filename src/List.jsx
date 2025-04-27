import React from 'react'

function List({ contacts, setDeleteContact }) {

    return (
        <div className='w-full h-auto flex justify-center content-center flex-wrap'>
            <h3 className='w-full text-blue-600 text-[25px] font-bold flex justify-start items-center'>Contacts List</h3>
            <ul className='w-full h-auto my-[30px] p-[20px] rounded-[5px] shadow-[0_2px_20px_5px_rgba(0,0,0,0.08)] flex flex-wrap justify-center content-center'>
                {contacts.length !== 0 && contacts.map((item, index) => {
                    return (<li className='w-[90%] h-[40px] bg-gray-100 rounded-[7px] my-[10px] flex justify-between items-center px-[20px]' key={index}>
                        <div>{item.name} {item.lastName} </div>
                        <div className='flex justify-center items-center flex-nowrap'>
                            <div className='w-[30px] h-[30px] bg-white rounded-[50%] flex justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15" /></svg>
                            </div>
                            <span className='mx-[10px]'> {item.email}</span>
                        </div>
                        <div className='flex justify-center items-center flex-nowrap'>
                            <div className='w-[30px] h-[30px] bg-white rounded-[50%] flex justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" /></svg></div>
                            <span className='mx-[10px]'> {item.phone}</span>
                        </div>
                        <div className='w-[30px] h-[30px] bg-white rounded-[50%] flex justify-center items-center ' onClick={() => setDeleteContact(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16" ><path fill="currentColor" d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5" /></svg>
                        </div>
                    </li>)

                })}
                {
                    contacts.length === 0 && <div> No Contacts Yet! </div>
                }
            </ul>
        </div>
    )
}

export default List