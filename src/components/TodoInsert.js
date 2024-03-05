import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';


const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        
        console.log(e.target.value);
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            
            if(value === '') {
                alert('다시입력해주세요')
            } else {
                onInsert(value);   // onInsert(value); // onInsert에 value 값을 파라미더로 넣어서 호출한다.
                setValue('') // setValue('') // value 값 초기화 
            }
            e.preventDefault(); // submit을 하면 새로고침하기에 이를 방지하기 이 함수를 호출한다.
            
        },
        [onInsert, value],
    );

    // const onClick = useCallback(
    //     () => {
    //         onInsert(value);
    //         setValue(''); // value 값 초기화
    //     }, [onInsert, value]
    // )
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input 
                placeholder='할 일을 입력하세요' 
                value={value}
                onChange={onChange}
            />
            <button>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;