
export const config= {
    appendPadding: 10,
    data:[
        {
            type: 'Title One',
            value: 0,
        },
        {
            type: 'Title Two',
            value: 0,
        },
        {
            type: 'Title Three',
            value: 0,
        },
        {
            type: 'Title Four',
            value: 0,
        }
    ],
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 8,
        },
    },
    interactions: [
        {
            type: 'element-selected',
        },
        {
            type: 'element-active',
        },
    ],
    statistic: {
        title: false,
        content: {
            style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            content: '',
        },
    },
};
