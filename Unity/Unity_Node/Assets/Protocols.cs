using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Protocols
{
    public class Packets
    {
        public class common
        {
            public int cmd; //커맨트 번호
            public string message; //메세지
        }

        public class req_data : common //Common 상속
        {
            public int id;
            public string data;
        }
    }
}
