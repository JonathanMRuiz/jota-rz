import axios from 'axios'
import fileDownload from 'js-file-download'
import ruizJ from './ruizJ.pdf'
import './BtnDownload.scss'

const BtnDownload = () => {
    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }
    
    return (
        <div className="btn">
            <button onClick={() => {handleDownload( ruizJ, 'ruizJ.pdf')}}>Download CV</button>
        </div>
    )
}

export default BtnDownload;



 



 

