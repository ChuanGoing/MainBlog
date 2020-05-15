vname=mainblog
name=$(docker ps|grep $vname|awk -F '[ ]{3,}' 'NR==1 {print $7}')

if [ "$name" != "" ];
then
    echo "docker stop $name ..."
    docker stop $name
fi

id=$(docker ps -a|grep $vname|awk 'NR==1 {print $1}')

if [ "$id" != "" ];
then
    echo "docker rm $id ..."
    docker rm $id
fi
