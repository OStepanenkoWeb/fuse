import * as React from 'react';
import  './Chats.css'
import Chat from "../chat/Chat";

export const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Mark'
                message='Yo whats up!'
                timestamp='40 seconds ago'
                profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'
            />
            <Chat
                name='Steve'
                message='Whats up?'
                timestamp='55 minutes ago'
                profilePic='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
            />
            <Chat
                name='Jeff'
                message='Ola!'
                timestamp='3 days ago'
                profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455'
            />
            <Chat
                name='Elon'
                message='Oops there is he is...!'
                timestamp='1 week ago'
                profilePic='https://bitnovosti.com/wp-content/uploads/2020/07/840px-Elon-musk-8501.jpg'
            />
        </div>
    );
};
