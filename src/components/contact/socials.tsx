import { Linkedin, Mail } from "lucide-react";
import { Card } from "../ui/card";

export default function Socials(){
    return (
        <div className="flex flex-wrap justify-center gap-10 my-5 p-5">
            <a href="mailto:sanjaybora380@gmail.com" target="_blank">
            <Card className="w-80 flex gap-3 p-5">
                <Mail className="p-2 w-10 h-10 bg-blue-600 text-white"/>
                <div>
                    <div className="font-bitter">Email</div>
                    <div className="text-blue-600">sanjaybora380@gmail.com</div>
                </div>
            </Card>
            </a>
            <a href="https://linkedin.com/in/sanjaybora04" target="_blank">
            <Card className="w-80 flex gap-3 p-5">
                <Linkedin className="p-2 w-10 h-10 bg-blue-600 text-white"/>
                <div>
                    <div className="font-bitter">LinkedIn</div>
                    <div className="text-blue-600">LinkedIn Profile</div>
                </div>
            </Card>
            </a>
        </div>
    )
}