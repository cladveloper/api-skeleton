export default function(req, res, next){
    const message   =   req.responseMessage  || "All went well";
    const code      =   req.responseCode     || "OK";
    const data      =   req.responseData     || [];
    const status    =   req.responseStatus   || 200;

    res.status(status).json({
        message,
        code,
        data,
        status: res.statusCode,
    });
}