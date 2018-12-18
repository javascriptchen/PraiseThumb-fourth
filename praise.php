<?php
class Conmysql
{
    public $servername;
    public $username;
    public $password;
    public $dbname;
    public $con = '';

    public function __constructor($servername, $username, $password, $dbname)
    {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }

    public function getConnection()
    {
        try {
            $dsn = "mysql:host=$servername;dbname=$dbname";
            $this->con = new PDO($dsn, $username, $password);
            echo "连接成功";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function updateDate($sql)
    {
        if ($this->con == null) {
            $this->getConnection();
        }
        header('content-type:application/json;charset=utf8');
        $res = $this->con->exec($sql);
        $arr = array('result' => $res);
        echo json_encode($arr);
        $this->closeCon();
    }

    public function closeCon()
    {
        $this->con = null;
    }
}

class realCon extends Conmysql{
    public function __constructor($servername, $username, $password, $dbname){
        parent::__constructor($servername, $username, $password, $dbname);
    }
    public function updateRealDate(){
        $sql = "UPDATE text SET num=num+1 WHERE id=1";
        $this->updateDate($sql);
    }
}

$praiseCon = new realCon('localhost','root','','test');
$praiseCon->updateRealDate();