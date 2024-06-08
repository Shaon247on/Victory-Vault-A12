import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart';
import useWinnerContest from '../../../../../Hooks/useWinnerContest';
import useApplied from '../../../../../Hooks/useApplied';
import Title from '../../../../../Components/Title/Title';

const WinningContest = () => {
    const [winningContest, reload,] = useWinnerContest()
    const [contests, refetch] = useApplied()
    const shiftSize = 7
    
    const dataMock = [
        { title: 'One', value: winningContest.length, color: '#24a06b' },
        { title: 'Two', value: contests.length, color: '#C13C37', },
    ];
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
    };

    console.log('total applied:', contests, 'total wins:', winningContest)
    return (
        <div>
            <Title
                subTitle='Progress Report'
                mainTitle='Track Your Progress & Result'
            ></Title>
            <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-10'>
                <div className=''>
                    <div>
                        <h1 className='text-lg font-semibold'>Details:</h1>
                    </div>
                    <div className='border-t-2 border-b-2 border-t-gray-500 border-b-gray-500 p-4 flex-1'>
                        <div className='flex justify-start items-center gap-60'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#C13C37] w-[16px] h-[16px]'></div>
                                <h1>Applied</h1>
                            </div>
                            <p>{contests.length}</p>
                        </div>
                        <div className='flex justify-start items-center gap-[260px]'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#24a06b] w-[16px] h-[16px]'></div>
                                <h1>Wins</h1>
                            </div>
                            <p>{winningContest.length}</p>
                        </div>
                    </div>
                </div>
                <div>

                    <PieChart
                        className='lg:w-[450px]'
                        data={dataMock}
                        radius={pieChartDefaultProps.radius - shiftSize}
                        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default WinningContest;