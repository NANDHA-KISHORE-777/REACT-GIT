import { Accessibility,AlarmClock,Aperture,Binary,Apple,Cable,Bluetooth
,Bike,Blinds,Coffee,Album,FolderOpen,PhoneCall,PencilRuler,RadioTower,Rocket} from "lucide-react";
export const Table1 = ()=>{
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor: '#f0f0f'}}>
        <table border="5px" cellSpacing="0px" align="center" style={{width:'450px',height:'450px', textAlign:'center',backgroundColor:'white'}}>
            <tr>
                <td><Accessibility/></td>
                <td><AlarmClock/></td>
                <td><Aperture/></td>
                <td><Album/></td>
            </tr>
            <tr>
                <td><Binary/></td>
                <td><Apple/></td>
                <td><Rocket/></td>
                <td><Cable/></td>
            </tr>
            <tr>
                <td><Bluetooth/></td>
                <td><Bike/></td>
                <td><Blinds/></td>
                <td><Coffee/></td>
            </tr>
            <tr>
                <td><FolderOpen/></td>
                <td><PhoneCall/></td>
                <td><PencilRuler/></td>
                <td><RadioTower/></td>
            </tr>
        </table>
        </div>
    )
}
