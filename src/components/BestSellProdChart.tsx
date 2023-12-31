import { ResponsivePie } from '@nivo/pie';
import { IPieData } from '../pages/BestSellProd';

interface MyResponsivePieProps {
    data: IPieData[];
}

const MyResponsivePie: React.FC<MyResponsivePieProps> = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 30, left: 80 }}
        padAngle={0}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
        }}
        // enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsRadiusOffset={0.65}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ]}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 20,
        //         itemWidth: 150,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000',
        //                 },
        //             },
        //         ],
        //     },
        // ]}
    />
);

export default MyResponsivePie;