import React, { useRef, UseEffect } from 'react';
import WebViewer from '@pdftron/webviewer';


export default function Resume() {
    const viewerDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        WebViewer({
            path: 'lib',
            initialDoc: '../../../assets/Resume2021'
        }, viewerDiv.current as HTMLDivElement).then(instance => {

        })
    }, []);

    return (
        <div className="Resume">
            <div className="webviewer" ref={viewerDiv}></div>
        </div>
    )
}