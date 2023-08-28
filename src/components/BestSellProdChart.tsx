import { ResponsiveBar, BarDatum, ComputedDatum } from '@nivo/bar';

interface MyResponsiveBarProps {
    data: BarDatum[];
}

const MyResponsiveBar: React.FC<MyResponsiveBarProps> = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'hotdog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
        ]}
        indexBy="country"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            
        ]}
        fill={[
            
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            
        }}
        axisLeft={{
            
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e: ComputedDatum<BarDatum>) =>
            `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
        }
    />
);

export default MyResponsiveBar;