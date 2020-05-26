vname=$1
#name=$(docker ps|grep $vname|awk -F '[ ]{3,}' 'NR==1 {print $7}')
id=$(docker ps -a|grep $vname|awk 'NR==1 {print $1}')

if [ "$id" != "" ];
then
    echo "docker stop $id ..."
    docker stop $id
fi

id=$(docker ps -a|grep $vname|awk 'NR==1 {print $1}')

if [ "$id" != "" ];
then
    echo "docker rm $id ..."
    docker rm $id
fi
