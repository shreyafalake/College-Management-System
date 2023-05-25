import { CardBody ,Card,CardTitle} from "reactstrap"

const About=() => {

    return(
        <div className="about">

            <Card className="text-center" border="danger" >
            <CardBody>
            <p><u><b>Address:</b></u> Opposite MIDC Office, Azde Gaon, Tata Power Company Limited, Dombivli East, Dombivli, Maharashtra 421203.</p>
            <p><u><b>Hours:</b></u> 1.Monday    [7 am–6 pm]
                      2.Tuesday	  [7 am–6 pm]
                      3.Wednesday [7 am–6 pm]
                      4.Thursday  [7 am–6 pm]
                      5.Friday    [7 am–6 pm]
                      6.Saturday  [7 am–6 pm]
                      7.Sunday    [Closed.]
            </p>
            <CardTitle><u><b>EmailId :</b></u> vidyalankarclgdesk@gmail.com</CardTitle>
            <CardTitle><u><b>Phone:</b></u> 0251 247 3282</CardTitle>
            </CardBody>
            </Card>
        </div>

    )

};
export default About;