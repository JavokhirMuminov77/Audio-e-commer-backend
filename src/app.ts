//expressni ulash uchun file
import  express  from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmion";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";



//1 Enterance => kirish qismi!

const app = express();
app.use(express.static(path.join( __dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

//2 Sessions 



//3 views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");


//4 Routers
//SSR: EJS
app.use ("/admin", routerAdmin);//EJS
app.use("/", router);//React

export default app;