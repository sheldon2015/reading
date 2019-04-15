# -*-coding:utf-8-*-
from smb.SMBConnection import SMBConnection
import os
import shutil
SAMBA_USERNAME = ""
SAMBA_PASSWORD = ""
'''
:param SAMBA_PORT  445,139都可以
'''
SAMBA_PORT = 445
SAMBA_MYNAME = ""
SAMBA_REMOTEIP = "192.168.0.20"
SAMBA_DOMAINNAME = ""
SAMBA_DIR = 'share'


class ConnectSamba():
    def __init__(self):
        self.user_name = SAMBA_USERNAME
        self.pass_word = SAMBA_PASSWORD
        self.my_name = SAMBA_MYNAME
        self.domain_name = SAMBA_DOMAINNAME
        self.remote_smb_IP = SAMBA_REMOTEIP
        self.port = SAMBA_PORT
        # smb服务器远程文件目录
        self.dir = SAMBA_DIR

    def download(self, download_filepath):
        # 列出目录
        try:
            conn = SMBConnection(self.user_name, self.pass_word,
                                 self.my_name, self.domain_name, use_ntlm_v2=True)
            conn.connect(self.remote_smb_IP, self.port)
            _dir = []
            try:
                _dir = list(filter(lambda x: x.filename != '.' and x.filename != '..', conn.listPath(
                    os.path.join(self.remote_smb_IP,
                                 self.dir), download_filepath
                )))
            except Exception as e:
                print(e)
            if not os.path.exists(download_filepath):
                os.mkdir(download_filepath)
            for x in _dir:
                if x.isDirectory:
                    self.download(os.path.join(download_filepath, x.filename))
                else:
                    pass
                    self.downloadFile(x.filename, download_filepath)

        except Exception as e:
            print(e)

    def downloadFile(self, filename, download_filepath):
        '''
        下载文件
        :param filename: 保存到本地的文件名
        :param download_filepath: 保存到本地文件的路径
        :return:True or False
        '''
        try:
            conn = SMBConnection(self.user_name, self.pass_word,
                                 self.my_name, self.domain_name, use_ntlm_v2=True)
            conn.connect(self.remote_smb_IP, self.port)
            # 打开本地文件
            file_obj = open(os.path.join(download_filepath, filename), 'wb')
            # 将远程文件写入本地文件
            conn.retrieveFile(os.path.join(
                self.remote_smb_IP, self.dir), os.path.join(download_filepath, filename), file_obj)
            file_obj.close()
        except Exception as e:
            print(e)

    def uploadFile(self, filename, upload_path):
        '''
        上传文件
        :param filename: 上传文件的名称
        :param upload_path: 上传文件的路径
        :return:True or False
        '''
        try:

            conn = SMBConnection(self.user_name, self.pass_word,
                                 self.my_name, self.domain_name, use_ntlm_v2=True)
            conn.connect(self.remote_smb_IP, self.port)
            # 打开的本地文件
            file_obj = open(
                os.path.join(upload_path, filename), 'rb')
            print(upload_path)
            print(filename, '\n\n')
            # 列出目录
            try:
                conn.listPath(os.path.join(
                    self.remote_smb_IP, self.dir), upload_path)
            except Exception as e:
                conn.createDirectory(os.path.join(
                    self.remote_smb_IP, self.dir), upload_path)

            # 上传到远程server
            conn.storeFile(os.path.join(self.remote_smb_IP,
                                        self.dir), os.path.join(upload_path, filename), file_obj)
            file_obj.close()
            return True
        except Exception as e:
            print(e)
            return False


smbConn = ConnectSamba()
# smbConn.downloadFile('ceshi.txt', 'F:\\samba\\')


# listdir 返回的只是文件好文件夹的名字，需要带上前置path路径字符串
# s = [x for x in os.listdir('test')if os.path.isdir(os.path.join('test', x))]


def upload(folder):
    '''
    :param folder: 上传文件目录名称
    '''
    s = [x for x in os.listdir(folder)]
    for x in s:
        if os.path.isdir(os.path.join(folder, x)):
            upload(os.path.join(folder, x))
        else:
            smbConn.uploadFile(x, folder)


# 上传文件夹
# upload('test')

# 上传单个文件
# smbConn.uploadFile('testimport2.py', '')


# 下载文件夹
def download(folder):
    '''
    :param folder: 下载文件目录名称
    '''
    smbConn.download(folder)


