import { useCallback } from 'react';

function TextUpdaterNode() {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);;
    }, []);

    return (
        <div className="text-updater-node">
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
        </div>
    );
}

export default TextUpdaterNode;