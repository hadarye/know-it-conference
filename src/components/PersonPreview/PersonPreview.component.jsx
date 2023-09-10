import './PersonPreview.styles.css' 

const PersonPreview = (props) => {
    return(
        <>
            <div className='person' style={{ backgroundImage: `url(${props.bg})` }}>
                <div className='preview-description' ></div>
            </div>
        </>
        
    )
}

export default PersonPreview;