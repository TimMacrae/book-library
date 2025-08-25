import type {ReactNode} from "react";

type TitleActionBarProps = {
    title: string;
    children: ReactNode;
}

export function TitleActionBar({title, children}:TitleActionBarProps) {
    return (
        <div style={{ paddingTop: '8px',marginBottom:"20px" ,borderBottom: '1px solid #ccc' }}>
            <h1 style={{color:"#000" ,display: 'flex', justifyContent: 'space-between'}} >{title}{children}</h1>
        </div>
    )
}