/**
 *  数据类型
 */
export type DataType = 'STRING' | 'INTEGER' | 'BOOLEAN' | 'LONG' | 'DOUBLE';


// FormField字段类型
export const dataTypeOptions = [
    {
        label: '整数',
        value: 'INTEGER'
    },
    {
        label: '长整数',
        value: 'LONG'
    },
    {
        label: '小数',
        value: 'DOUBLE'
    },
    {
        label: '字符串',
        value: 'STRING'
    },
    {
        label: '布尔类型',
        value: 'BOOLEAN'
    },
]
