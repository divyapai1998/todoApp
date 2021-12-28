import { useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Delete from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@material-ui/core";
import { ListItem } from "@material-ui/core";


const Todo = () => {
    const [list, setList] = useState([]);
    const [OverAllList, setOverAllList] = useState([]);
    function getdata(item) {
        item.preventDefault();
        setList(i => [...i, { 'val': item.target[0].value, 'isCompleted': false }])
    }

    function markcompletedOrDelete(mcod, index) {
        if (mcod === 'd') { setList(j => j.filter((el, j) => j !== index)) }
        else {
            list[index].isCompleted = true;
            setList(j => j.map(el => el))
        }

    }
    function saveThelist() {
        OverAllList.push(list)
        setOverAllList(li => li.map(e => e));
        console.log(OverAllList)
    }

    return (
        <div>
            <Container maxWidth="md" className="containerClass">
                <div className="heading">
                    The ToDo App
                </div>
            </Container>
            <section>
                <div className="todoParentDivClass">
                <div className="tododivClass">
                    <form onSubmit={getdata}>
                        <input placeholder="Enter a Todo Item" className="input_font part-sub-head"></input>
                        <div>
                            {list.map((el, i) =>
                                // <Box sx={{display: 'flex', flexDirection : 'row'}}>
                                //     <ListItem> {el.val}</ListItem>
                                //     <ListItem><Button className="check_circle_cls" onClick={() => markcompletedOrDelete('c', i)}><CheckCircle className={el.isCompleted ? 'colGreen' : 'colRed'} /></Button> </ListItem>
                                //     <ListItem><Button className="check_circle_cls" onClick={() => markcompletedOrDelete('d', i)}><Delete /></Button></ListItem>
                                // </Box>
                                <Box lg={{display: 'flex', flexDirection : 'row'}}>
                                <Grid key={el.val+i} container rowSpacing={1}>
                                    <Grid item lg={8} className="part-sub-head">{el.val}</Grid>
                                    <Grid item lg={2}><div className="check_circle_cls" onClick={() => markcompletedOrDelete('c', i)}><CheckCircle className={el.isCompleted ? 'colGreen' : 'colRed'} /></div></Grid>
                                    <Grid item lg={2}><div className="check_circle_cls" onClick={() => markcompletedOrDelete('d', i)}><Delete className="deleteIconSize" /></div></Grid>
                                </Grid>
                                </Box>
                                )}
                        </div>
                    </form>
                </div>
                <Button className="savebtn" onClick={saveThelist}>SAVE</Button>
               </div>
            </section>
        </div>

    )

}
export default Todo