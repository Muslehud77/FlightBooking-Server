import configs from '../../configs';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { TUserResponse } from '../User/user.interface';
import { authServices } from './auth.service';
import { TUser } from './../User/user.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = (await authServices.createUserIntoDB(
    userData,
  )) as unknown as TUserResponse;

  const data = {
    success: true,
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  };
  sendResponse<TUserResponse>(res, data);
});

const userSignIn = catchAsync(async (req, res) => {
  const userData = req.body;

  const { rest, accessToken, refreshToken } =
    await authServices.signIn(userData);

  res.cookie('refreshToken', refreshToken, {
    secure: configs.node_env === 'production',
    httpOnly: true,
  });
  res.cookie('accessToken', accessToken, {
    secure: configs.node_env === 'production',
    httpOnly: true,
  });

  const data = {
    success: true,
    statusCode: 200,
    message: 'User registered successfully',
    data: rest as TUser,
    token: accessToken,
  };
  sendResponse<TUser>(res, data);
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = (await authServices.refreshToken(refreshToken)) as unknown as {
    token: string;
  };

  res.cookie('accessToken', result, {
    secure: configs.node_env === 'production',
    httpOnly: true,
  });

  const data = {
    success: true,
    statusCode: 200,
    message: 'Token updated successfully',
    token: result,
  };
  sendResponse<{ token: string }>(res, data);
});

const logOut = catchAsync(async (req, res) => {
  const { refreshToken, accessToken } = req.cookies;

  res.clearCookie('accessToken').clearCookie('refreshToken');

  const data = {
    success: true,
    statusCode: 200,
    message: 'user logged out successfully',
    data: { message: 'user logged out successfully' },
  };

  res
    .clearCookie('accessToken')
    .clearCookie('refreshToken')
    .status(200)
    .json(data);

  if (refreshToken || accessToken) {
    throw new AppError(httpStatus.FORBIDDEN, 'Could not logout the user!');
  }
});

export const authController = {
  createUser,
  userSignIn,
  refreshToken,
  logOut,
};
