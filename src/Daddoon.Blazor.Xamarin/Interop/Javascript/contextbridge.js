﻿var XamarinCommonAssemblyName = 'Daddoon.Blazor.Xamarin.Common';
var BlazorToXamarinDispatcherNamespace = 'Daddoon.Blazor.Xam.Common.Services';
var BlazorToXamarinDispatcherTypeName = 'BlazorToXamarinDispatcher';
var BlazorToXamarinDispatcherReceiveMethodName = 'Receive';


var BlazorToXamarinDispatcherReceiveMethodInfo = null;

function ResolveBlazorToXamarinReceiver() {

    if (BlazorToXamarinDispatcherReceiveMethodInfo === null || BlazorToXamarinDispatcherReceiveMethodInfo === undefined) {
        BlazorToXamarinDispatcherReceiveMethodInfo = Blazor.platform.findMethod(
            XamarinCommonAssemblyName,
            BlazorToXamarinDispatcherNamespace,
            BlazorToXamarinDispatcherTypeName,
            BlazorToXamarinDispatcherReceiveMethodName);
    }

    return BlazorToXamarinDispatcherReceiveMethodInfo;
}

window.contextBridge = {
    send: function (csharpProxy) {
    },
    receive: function (csharpProxy) {
        var receiver = ResolveBlazorToXamarinReceiver();
        if (receiver === null || receiver === undefined)
            return;

        var jsonDotNet = Blazor.platform.toDotNetString(csharpProxy);

        Blazor.platform.callMethod(receiver, null, [
            jsonDotNet
        ]);
    }
};

Blazor.registerFunction('contextBridgeSend', function (data) {
    window.contextBridge.send(data);
});